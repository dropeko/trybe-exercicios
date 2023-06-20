const { readMissionData } = require("./utils/fsUtils");

async function main() {
  const data = await readMissionData()
  console.log(data);
}

main();