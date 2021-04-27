import { loadFeature, defineFeature } from "jest-cucumber";
import supertest from "supertest";

const feature = loadFeature("features/petStore.feature");
const request = supertest("https://petstore.swagger.io/v2/pet");

defineFeature(feature, (test) => {
  //   beforeEach(() => {
  //   });

  test("Add a new pet to the store", ({ given, when, then }) => {
    //     then('I should be granted access', () => {
    //       expect(accessGranted).toBe(true);
    //     });
    //   });
    // });

    // when("Finds Pets by status", async () => {
    //   const response = await request.get("/findByStatus?status=available");
    //   expect(response.body).not.toBe(null);
    //   console.log(response.body);
    // });

    const petId = Date.now();
    console.log(petId);

    when("I add a new pet", async () => {
      const payload = {
        id: petId,
        category: {
          id: 0,
          name: "koteł2",
        },
        name: "doggie",
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: "available",
      };
      const response = await request
        .post("/")
        .set("Accept", "application/json")
        .send(payload);
      expect(response.body).not.toBe(null);
      console.log(response.body);
    });

    then("I can find my new pet in the store", async () => {
      console.log("second");
      console.log(petId);
      const response = await request.get(`/${petId}`);
      expect(response.body).not.toBe(null);
      console.log(response.body);
    });
  });
});
