## Pitch
 These days, fitness classes can be held anywhere - a park, an unfinished basement or a garage - not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. While you could use several mobile apps to accomplish this, AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.
## MVP
1. User can create/register as a "Client" and login with the registered credentials.(web, mobile)
2. User can create/register as an "Instructor" by entering an additional Auth Code during signup, and can login with the registered credentials.(web, mobile)
3. "Client" and "Instructor" are both presented with the appropriate onboarding walkthrough on first signin, with an option to skip it.(UX, mobile)
4. Authenticated "Instructor" can create update and delete a "Class". At a minimum, each "class" must have the following properties(web, mobile):

	* Name
	* Type
	* Start time
	* Duration
	* "Intensity" level
	* Location
	* Current number of registered attendees
	* Max class size

5. Authenticated "Instructor" can create "virtual" punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, HIGH, pilates, etc.)(mobile)
6. Authenticated "Client" can search for avaialble classes. At a minimum, they must be able to search by the following criteria(web, mobile):
	* class time
	* class date
	* class duration
	* class type
	* "Intensity level"
	* class location
7. Authenticated user can reserve a spot in a class with available seats open, and can reschedule or cancel their current reservation from the mobile app(mobile).

## Rubrics
https://www.notion.so/Web-Unit-4-Node-ac50a1d0cf0a4941a1b20cd28a1c03c6

### You will build a Web API in coordination with the front end team.

The API should provide the endpoints that the front end needs to complete client requirements and demonstrate your proficiency in the skills you've learned so far.

The API should be built using the REST architectural pattern, provide data persistence, incorporate authentication, include automated tests and be deployed to a hosting platform of your choice.
