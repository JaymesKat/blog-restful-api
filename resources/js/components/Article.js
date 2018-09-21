import React from 'react';

const Article = ({article}) => {

  const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      margin: '30px 10px 10px 30px'
  }

  if(!article) {

    return(<div style={divStyle}><h2><strong>No Article is selected</strong></h2> </div>);
  }

  return(
    <div style={divStyle}>
      <h2><strong>{article.title}</strong></h2>
      <p> {article.body} </p>
      <h5> Post date : {article.created_at} </h5>

    </div>
  )
}

export default Article ;
