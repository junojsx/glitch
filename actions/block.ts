import { blockUser } from "@/lib/block-service";

export const onBlock = async (id: string) => {
 const blockedUser = await blockUser(id);
};
