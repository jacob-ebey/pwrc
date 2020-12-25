function findModulesForImportPath(modules, importPath) {
  const mods = [];
  for (const mod of modules || []) {
    if (
      mod &&
      mod.reasons &&
      mod.reasons.some((reason) => reason && reason.userRequest === importPath)
    ) {
      mods.push(mod);
    }

    if (mod && mod.children) {
      mods.push(...findModulesForImportPath(mod.children, importPath));
    }
  }

  return mods;
}

function findModulesByIds(modules, ids) {
  const mods = [];
  for (const mod of modules || []) {
    if (mod && ids.has(mod.id)) {
      mods.push(mod);
    }

    if (mod && mod.children) {
      mods.push(...findModulesByIds(mod.children, ids));
    }
  }

  return mods;
}

export function getPreloadChunks(stats, importPath) {
  const publicPath =
    stats.publicPath && stats.publicPath !== "auto" ? stats.publicPath : "";
  const preload = new Set();
  for (const chunk of stats.chunks) {
    if (chunk.modules && chunk.files) {
      const mods = findModulesForImportPath(chunk.modules, importPath);
      // TODO: Get deps of the mods.
      if (mods.length > 0) {
        chunk.files.forEach((f) => preload.add(publicPath + f));

        const modIds = new Set(
          mods.reduce(
            (p, mod) => [
              ...p,
              ...(mod.modules ? mod.modules.map((m) => m.id) : []),
            ],
            []
          )
        );
        const subMods = findModulesByIds(stats.modules, modIds);
        for (const subMod of subMods) {
          if (subMod.chunks && subMod.chunks.length > 0) {
            const chunkIds = new Set(subMod.chunks);
            stats.chunks.forEach((c) => {
              if (chunkIds.has(c.id)) {
                c.files.forEach((f) => preload.add(publicPath + f));
              }
            });
          }
        }
      }

      for (const mod of mods) {
        const chunksSet = new Set(mod.chunks);
        for (const subChunk of stats.chunks) {
          if (chunksSet.has(subChunk.id)) {
            if (subChunk.files) {
              subChunk.files.forEach((f) => preload.add(publicPath + f));
            }
          }
        }
      }
    }
  }

  return Array.from(preload);
}
