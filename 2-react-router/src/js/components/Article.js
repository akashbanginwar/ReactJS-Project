import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        
        <p>One person with passion is better than forty people merely interested. 
          My passion for web development led me to start my own small web development firm where 
          I learned firsthand about client requirement gathering, designing clean user interfaces 
          and responsive design and fulfilling client requirements as well as brainstorming with 
          team for unique ideas. I have worked on latest web technologies ranging from HTML5, CSS3, 
          JavaScript, ES6, jQuery, Ajax, Bootstrap and Angular 2. Since I have worked directly with 
          the clients I have seen all the phases of web development right from client gathering to wire
           framing to prototyping to final delivery. I feel my own startup experience will give me a 
           unique edge over the other candidates and 
          I would prove a valuable asset and a team player.</p>

        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
