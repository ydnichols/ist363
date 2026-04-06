const accessKey = "nRVI010ujsi3BcoOLJmG2u4SKupXELUEb1o2V1y0QP4";

const placeName = document.getElementById("placeName");
const placeImage = document.getElementById("placeImage");
const description = document.getElementById("description");
const button = document.getElementById("exploreBtn");

const places = [
    "Maldives",
    "Bora Bora",
    "Santorini",
    "Dubai",
    "Bali",
    "Phuket",
    "Paris",
    "Tokyo",
    "New York",
    "Rome",
    "Sydney",
    "Cape Town",
    "Barcelona"
];

function getRandomPlace() {
    const index = Math.floor(Math.random() * places.length);
    return places[index];
}

async function getDestination() {
    const place = getRandomPlace();
    placeName.textContent = place;

    try {
        // ✅ FIXED WIKIPEDIA CALL
        const wikiRes = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${place}`
        );

        if (!wikiRes.ok) {
            throw new Error("Wiki data failed");
        }

        const wikiData = await wikiRes.json();
        description.textContent = wikiData.extract;

        // ✅ UNSPLASH CALL
        const imgRes = await fetch(
            `https://api.unsplash.com/photos/random?query=${place}&client_id=${accessKey}`
        );

        if (!imgRes.ok) {
            throw new Error("Image fetch failed");
        }

        const imgData = await imgRes.json();
        placeImage.src = imgData.urls.regular;
        placeImage.alt = place;

    } catch (error) {
        console.error(error);
        description.textContent = "Failed to load data. Try again.";
    }
}

button.addEventListener("click", getDestination);

getDestination();