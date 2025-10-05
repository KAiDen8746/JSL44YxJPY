// 代码生成时间: 2025-10-05 20:24:31
const xss = require('xss');

// 配置XSS过滤选项
const options = {
  allowDataAttr: true,
  whiteList: ['b', 'i', 'u', 'strong', 'em', 'p', 'br', 'ol', 'ul', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre'],
  stripIgnoreTagBody: ['script', 'style', 'textarea', 'title'],
  stripIgnoreTag: ['script', 'style'],
  onIgnoreTagAttr: function(tag, name, value, isWhiteAttr) {
    return isWhiteAttr || name === 'data-*';
  },
  onTagAttr: function(tag, name, value, isWhiteAttr) {
    return isWhiteAttr || name === 'data-*';
  },
  escapeHtml: false,
  keepTagEmpty: ['area', 'base', 'br', 'col', 'hr', 'img', 'input', 'link', 'meta'],
  safeAttrValue: true,
  enableAttrMinimize: true,
  cssNamespace: '的危险属性',
  enableHtmlInAttr: true,
  onAttr: function(tag, name, value, isWhiteAttr) {
    return isWhiteAttr;
  },
};

// 过滤函数，输入用户数据，输出安全数据
function filterXSS(input) {
  try {
    // 使用xss库过滤XSS攻击
    return xss(input, options);
  } catch (error) {
    // 错误处理
    console.error('XSS filter error:', error);
    throw error;
  }
}

// 导出filterXSS函数
module.exports = {
  filterXSS
};
