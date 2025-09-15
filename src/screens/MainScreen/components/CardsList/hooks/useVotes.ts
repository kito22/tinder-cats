import { useState } from "react";
import { sendVote } from "src/services/catApi";
import { IVote } from "src/types/cat";

export const useVotes = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const vote = async (voteData: IVote) => {
    try {
      setLoading(true);
      await sendVote(voteData);
    } catch (err) {
      setError("Error sending vote");
    } finally {
      setLoading(false);
    }
  };

  return { vote, error, loading };
};
