import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x1B7f12a14c932424E730390921c84C96fe25fD22");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "Minidoro Governance Token",
      symbol: "MIGO",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
