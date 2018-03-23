const express = require("express");
const router = express.Router();
const request = require("request");

/* GET listing. */
router.get("/", function(req, res, next) {
	//const url = "https://www.matchesfashion.com/nms/ajax/p/1095470,1095483,1095472,109546";
	const url = "https://api.myjson.com/bins/ibifj";
  	request(url, null, (err, result, body) => {
		if (err) res.send({ error: "Request of the products failed" });
		else {
			res.send({data: JSON.parse(body)});
		}
  	});
});

module.exports = router;
