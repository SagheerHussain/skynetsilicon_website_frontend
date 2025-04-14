export const getPortfolios = async () => {
  try {
    const response = await fetch(
      `https://skynetsilicon-website-backend.vercel.app/api/portfolio`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return [];
  }
};
