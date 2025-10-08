// 代码生成时间: 2025-10-09 02:59:22
const fs = require('fs');
const ExcelJS = require('exceljs');

// 定义一个函数生成Excel文件
async function generateExcel(data, filename) {
  // 创建一个新的ExcelJS工作簿
  const workbook = new ExcelJS.Workbook();

  // 添加一个工作表
  const worksheet = workbook.addWorksheet('My Sheet');

  // 将数据添加到工作表中
  worksheet.addRow(Object.keys(data[0])); // 添加标题行

  // 遍历数据并添加到工作表中
  data.forEach((row) => {
    worksheet.addRow(Object.values(row));
  });

  // 将工作簿写入到文件中
  const buffer = await workbook.xlsx.writeBuffer();
  fs.writeFileSync(filename, buffer);

  // 打印成功消息
  console.log(`Excel file generated: ${filename}`);
}

// 示例数据
const sampleData = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 25,
  },
];

// 生成Excel文件
generateExcel(sampleData, 'output.xlsx')
  .then(() => {
    console.log('Excel generation completed successfully.');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });

// 在Nuxt框架中，你可以将此代码封装成一个插件或者组件，并在需要的地方调用generateExcel函数。