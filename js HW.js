// 🔹 Step 1: Function that accepts a callback
function missionWithCallback(callback) {
  console.log("Mission initiated... 🛰️");

  setTimeout(() => {
    callback("Callback: Mission executed successfully ✅");
  }, 1000);
}

// 🔹 Step 2: Function that returns a Promise
function missionWithPromise() {
  return new Promise((resolve, reject) => {
    let success = true; // switch to false to test rejection

    setTimeout(() => {
      if (success) {
        resolve("Promise: Mission accomplished ✅");
      } else {
        reject("Promise: Mission failed ❌");
      }
    }, 2000);
  });
}

// 🔹 Step 3: Async/Await function to handle promise
async function executeMission() {
  // Run callback first
  missionWithCallback(message => console.log(message));

  // Then handle Promise using async/await
  try {
    const result = await missionWithPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// 🔹 Execute full mission
executeMission();
