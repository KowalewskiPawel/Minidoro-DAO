import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0x1B7f12a14c932424E730390921c84C96fe25fD22"
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "5 A.M. Club's Proposals",
      votingTokenAddress: "0x3c66DEF4bF49c060F265F007c2dafe2961152A2C",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();
