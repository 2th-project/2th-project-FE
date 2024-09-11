const express = require("express");
const cors = require("cors");
const supabase = require("./supabase-client"); // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/news", async (req, res) => {
  try {
    const { data: articles, error } = await supabase
      .from("news")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Error fetching data from Supabase:", error);
      return res.status(500).json({ error: "Failed to fetch news" });
    }

    res.json({ articles });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
