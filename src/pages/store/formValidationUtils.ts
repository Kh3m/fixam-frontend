// formValidationUtils.ts

export const validate = async (
  infoData: "contact" | "brand" | "socials",
  getFieldState: any,
  trigger: any
) => {
  switch (infoData) {
    case "contact":
      await trigger(["firstName", "lastName", "email", "phone", "address"]);

      if (
        getFieldState("firstName").invalid ||
        getFieldState("lastName").invalid ||
        getFieldState("email").invalid ||
        getFieldState("phone").invalid ||
        getFieldState("address").invalid
      ) {
        return false;
      } else return true;

    case "brand":
      await trigger(["storeName", "businessRCNumber", "slug", "description"]);
      if (
        getFieldState("storeName").invalid ||
        getFieldState("businessRCNumber").invalid ||
        getFieldState("slug").invalid ||
        getFieldState("description").invalid
      ) {
        return false;
      } else return true;

    case "socials":
      await trigger(["facebookLink", "igLink", "xLink"]);
      if (
        getFieldState("facebookLink").invalid ||
        getFieldState("igLink").invalid ||
        getFieldState("xLink").invalid
      ) {
        return false;
      } else return true;
  }
};
