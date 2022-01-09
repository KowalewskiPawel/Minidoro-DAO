import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x9aCDAe19212b34b92399c74062E261BecbF549C2"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Minidoro Clock",
        description: "Membership card",
        image: readFileSync("scripts/assets/logo.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
