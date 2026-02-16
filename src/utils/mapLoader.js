export async function loadMap(url) {
const response = await fetch(url);

if (!response.ok) {
throw new Error("Failed to load map");
}

const data = await response.json();

if (
typeof data.width !== "number" ||
typeof data.height !== "number" ||
!Array.isArray(data.tiles) ||
!Array.isArray(data.collisions)
) {
throw new Error("Invalid map format");
}

if (data.tiles.length !== data.width * data.height) {
throw new Error("Invalid tiles length");
}

if (data.collisions.length !== data.width * data.height) {
throw new Error("Invalid collisions length");
}

return data;
}