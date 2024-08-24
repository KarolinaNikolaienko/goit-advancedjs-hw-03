export function searchImages(query) {
    const config = new URLSearchParams({
        key: "3632143-ebeee10190d206f1a5cb99fa1",
        q: encodeURIComponent(query),
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });
    return fetch(`https://pixabay.com/api/?${config}`)
        .then((response) => {
            if (!response.ok)
                throw new Error(response.status);
            return response.json();
        });
}