export const getCategories = async () => {
  try {
    const response = await fetch(
      `https://skynetsilicon-website-backend.vercel.app/api/category`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};