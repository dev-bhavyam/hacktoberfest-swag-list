const TAG_EMOJI = {
    Tshirt: "👕",
    Stickers: "🏷️",
    Bottle: "🍾",
    Socks: "🧦",
    Hoodie: "🧥",
    Cap: "🧢",
    Swags: "🛍️",
    Swag: "🛍️",
};

const DEFAULT_TAG_EMOJI = "💜";

export const getTagEmoji = (tag) =>
    TAG_EMOJI[tag] ? TAG_EMOJI[tag] : DEFAULT_TAG_EMOJI;
