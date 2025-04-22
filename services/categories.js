export const getCategories = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/category`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};