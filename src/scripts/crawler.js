require("dotenv").config(); // Load environment variables from .env file
const axios = require("axios");
const cheerio = require("cheerio");
const supabase = require("../supabase-client");

const fetchNewsData = async () => {
  const baseUrl =
    "https://www.bokjitimes.com/news/articleList.html?view_type=sm&page=";
  let articles = [];
  const maxPages = 50;

  try {
    for (let i = 1; i <= maxPages; i++) {
      const url = `${baseUrl}${i}`;
      const { data } = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
          Referer: "https://www.bokjitimes.com/",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        },
      });

      // Print the raw HTML for the first page
      if (i === 1) {
        console.log("Raw HTML for Page 1:", data);
      }

      const $ = cheerio.load(data);

      $("h4.titles a").each((_, element) => {
        const title = $(element).text().trim();
        const link = $(element).attr("href");

        if (title && link) {
          articles.push({
            title,
            link: `https://www.bokjitimes.com${link}`,
          });
        }
      });

      console.log(`Fetched Articles from Page ${i}:`, articles);
    }

    // Insert into Supabase
    if (articles.length > 0) {
      const { data: insertedData, error } = await supabase
        .from("news")
        .insert(articles);

      if (error) console.error("Error inserting data:", error);
      else console.log("Inserted data:", insertedData);
    } else {
      console.log("No articles to insert");
    }
  } catch (error) {
    console.error("Error fetching news data:", error);
  }
};

// Execute periodically (e.g., every hour)
setInterval(fetchNewsData, 3600000);

fetchNewsData();
