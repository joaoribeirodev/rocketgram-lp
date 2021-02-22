import fs from "fs";
import path from "path";

export default (req, res) => {
  const { way } = req.query;
  const pathWay = path.resolve(`public/content/${way}/topic.json`);
  const data = fs.readFileSync(pathWay);

  res.status(200).json(data);
};
