const API_URL =
  "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10";

export async function getAllMeals() {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok)
      throw new Error("Could not load meals data! Please try again.");

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
