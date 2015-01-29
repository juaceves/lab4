
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'projects':[
  	{'name': 'Waiting in Line',
  	'image': 'lorempixel.people.1.jpeg',
  	'id': 'project1'
  	    {{#each projects}}
      <div class="project" id="{{id}}">
        <a href="project" class="thumbnail">
          <img src="images/{{image}}" ... />
          <p>{{name}}</p>
        </a>
      </div>
       {{/each}}
    },
    { 'name' : 'Needfinding',
	   'image' : 'lorempixel.vity.1.jpeg',
	   'id' : 'project2'
	       {{#each projects}}
      <div class="project" id="{{id}}">
        <a href="project" class="thumbnail">
          <img src="images/{{image}}" ... />
          <p>{{name}}</p>
        </a>
      </div>
    {{/each}}
	},
    { 'name': 'Prototyping',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
            {{#each projects}}
      <div class="project" id="{{id}}">
        <a href="project" class="thumbnail">
          <img src="images/{{image}}" ... />
          <p>{{name}}</p>
        </a>
      </div>
    {{/each}}
    },
    { 'name': 'Heuristic Evaluation',
      'image': 'lorempixel.abstract.1.jpeg'
       'id': 'project4'
           {{#each projects}}
      <div class="project" id="{{id}}">
        <a href="project" class="thumbnail">
          <img src="images/{{image}}" ... />
          <p>{{name}}</p>
        </a>
      </div>
    {{/each}}
    },
    { 'name': 'Visualization',
      'image': 'lorempixel.abstract.8.jpeg',
      'id': 'project5'
          {{#each projects}}
      <div class="project" id="{{id}}">
        <a href="project" class="thumbnail">
          <img src="images/{{image}}" ... />
          <p>{{name}}</p>
        </a>
      </div>
    {{/each}}
    },
    { 'name': 'Social design',
      'image': 'lorempixel.people.2.jpeg',
      'id': 'project6'
          {{#each projects}}
      <div class="project" id="{{id}}">
        <a href="project" class="thumbnail">
          <img src="images/{{image}}" ... />
          <p>{{name}}</p>
        </a>
      </div>
    {{/each}}
    },
    { 'name': 'Gestural interaction',
      'image': 'lorempixel.technics.2.jpeg',
      'id': 'project7'
          {{#each projects}}
      <div class="project" id="{{id}}">
        <a href="project" class="thumbnail">
          <img src="images/{{image}}" ... />
          <p>{{name}}</p>
        </a>
      </div>
    {{/each}}
    },
    { 'name': 'Design tools',
      'image': 'lorempixel.city.2.jpeg',
      'id': 'project8'
          {{#each projects}}
      <div class="project" id="{{id}}">
        <a href="project" class="thumbnail">
          <img src="images/{{image}}" ... />
          <p>{{name}}</p>
        </a>
      </div>
    {{/each}}
    }
    ]
  });
};