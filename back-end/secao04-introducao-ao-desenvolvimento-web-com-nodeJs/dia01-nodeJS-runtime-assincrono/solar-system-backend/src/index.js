const { writeMissionData } = require("./utils/fsUtils");

async function main() {
  writeMissionData({
    "id": 101,
    "name": "Tryber 2",
    "year": "2023",
    "country": "Brasil",
    "destination": "Lua"
  })
}

main();