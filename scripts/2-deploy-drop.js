import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x1B7f12a14c932424E730390921c84C96fe25fD22");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "5 AM Club",
      description: "DAO of 5 AM Club.",
      image: readFileSync("scripts/assets/logo.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata()
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})();
