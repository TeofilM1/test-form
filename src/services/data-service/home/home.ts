import { createApiHandler } from "../utils";
import { createMockApiHandler } from "../utils/create-mock-api-handler.util";

export const submitIntroduction = createApiHandler(
  async (introduction) => createMockApiHandler(introduction),
  // async (introduction) => {
  //   const { data } = await authenticatedClient.post(
  //    'api/createIntroduction',
  //     {introduction}
  //   )

  //   return data
  // },

  ["submit-introduction"]
);

export const editCard = createApiHandler(
  async (card) => createMockApiHandler(card),
  // async (card, id) => {
  //   const { data } = await authenticatedClient.put(
  //    `api/cards${id}`,
  //     {card}
  //   )

  //   return data
  // },
  (id) => ["user_card", id]
);
