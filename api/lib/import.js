const xlsx = require("node-xlsx");
const CustomError = require("./Error");
const { HTTP_CODES } = require("../config/Enum");

class Import {
  constructor() {}

  fromExcel(filePath) {
    let workSheets = xlsx.parse(filePath);

    if (!workSheets || workSheets == 0) {
      throw new CustomError(
        HTTP_CODES.BAD_REQUEST,
        "Invalid Excel Format",
        "Invalid Excel Format"
      );
    }

    let rows = workSheets[0].data;

    if (rows?.length == 0) {
      throw new CustomError(
        HTTP_CODES.NOT_ACCEPTABLE,
        "File is Empty",
        "Excel File is Empty"
      );
    } else {
      return rows;
    }
  }
}

module.exports = Import;
