import axios from 'axios'
import getCurrentCredentials from './GetCredentials'

const apiUrl = 'http://localhost:3000/v1/'

const getArticles = async () => {
  try {
    let response = await axios.get(apiUrl + 'articles')
    return response.data
  } catch(error) {
    return {
      error: error.response.data.error_message,
    }
  }
}

const submitArticle = async (title, content, image) => {
  try {
    let response = await axios.post(apiUrl + 'articles',
    {
      title: title,
      content: content,
      image: image
    },
    {
      headers: getCurrentCredentials()
    })
    debugger
    return response

  } catch(error) {
    debugger;
    return error.response.data.error_message
  }
}

const getSpecificArticle = async (articleId) => {
  try {
    let response = await axios.get(apiUrl + `articles/${articleId}`,
    {
      headers: getCurrentCredentials()
    })
    debugger
    return response
  } catch(error) {
    debugger
    return error.response.data.error_message
  }
}

const editArticle = async (title, content, image) => {
  try {
    let response = await axios.put(apiUrl + 'articles',
    {
      title: title,
      content: content,
      image: image
    })
    return response
    
  } catch(error) {
    return error.response.data.error_message
  }
}

export { getArticles, submitArticle, getSpecificArticle, editArticle }