import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// data.json 파일 읽기
const rawdata = fs.readFileSync("data.json", "utf8");
const parsedData = JSON.parse(rawdata);
const data = parsedData.data;

console.log("Data:", data);

const insertData = async (data) => {
  try {
    for (const item of data) {
      const { error } = await supabase.from("details").insert([
        {
          service_name: item.서비스명,
          service_purpose_summary: item.서비스목적요약,
        },
      ]);

      if (error) throw error;
      console.log(`Inserted: ${item.서비스명}`);
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

insertData(data).then(() => console.log("Data successfully uploaded."));
