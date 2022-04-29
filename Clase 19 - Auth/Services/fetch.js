export const fetching = async (url) => {
    const response = await fetch(url);
    const categories = response.json();
    return categories
}