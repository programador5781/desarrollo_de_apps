const dataFilter = (data) => {
    return data.map((element) => {
        const basicInfo = {
            name: element.name,
            description: element.description,
            platforms: element.platforms.map(platform => ({
                id: platform.platform.id,
                name: platform.platform.name,
                slug: platform.platform.slug,
                image: platform.platform.image,
                year_end: platform.platform.year_end,
                year_start: platform.platform.year_start,
                games_count: platform.platform.games_count,
                image_background: platform.platform.image_background
            })),
            released_at: element.released_at,
            background_image: element.background_image,
            rating: element.rating
        };

        return basicInfo;
    });
};

module.exports = { dataFilter };