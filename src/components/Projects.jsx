import TextWrapper from "./TextWrapper"
import Project from "./Project"
import Filter from "./Filter"
import { useState } from "react";
export default function Projects(){
    const [activeFilter, setActiveFilter] = useState("ALL");

    const filters = ["ALL","HTML & CSS","JS","Node Js","Scratch","Java","Group Project"];
    const allProjects = [
          {
            imageSrc:"./src/assets/images/trip_pilot.png", 
            title : "Dictionary App Using HashSet", 
            description:"A simple dictionary application using Java HashSet to store and manage unique words. It allows users to add and search words while preventing duplicate entries.",
            languages : ["Om", "Node Js", "SQL"],
            demoSrc:"https://trip-pilot-8080.zcodecorp.in/?access_token=10&name=Nanthakumar+R&email=nantha.r%40zohocorp.com&profile=https%3A%2F%2Fres.cloudinary.com%2Fdurykcmfs%2Fimage%2Fupload%2Fv1772346740%2Ftoamkmrlrmtxzqkrxw91.jpg&ui_trip_management1_1_user_name=Nanthakumar+R&ui_trip_management1_1_profile_img=https%3A%2F%2Fres.cloudinary.com%2Fdurykcmfs%2Fimage%2Fupload%2Fv1772346740%2Ftoamkmrlrmtxzqkrxw91.jpg&ui_trip_management1_1_email=nantha.r%40zohocorp.com&ui_trip_management1_1_trip_role=FINANCIAL_MANAGER&ui_trip_management1_1_trip_dates=02-Mar-26+to+02-Apr-26&ui_trip_management1_1_member_role=3&ui_trip_management1_1_update_member_role=1&ui_trip_management1_1_overview_test=false&ui_trip_management1_1_trip_capacity=16&ui_trip_management1_1_per_person_amount=3334&ui_trip_management1_1_food=22.02436738519213&ui_trip_management1_1_room=41.424554826616685&ui_trip_management1_1_other=20.61855670103093&ui_trip_management1_1_transport=15.932521087160262&ui_trip_management1_1_sidebar_width=15&ui_trip_management1_1_selected_category_key=overview&ui_trip_management1_1_panel_selected_category_key=trips&ui_trip_management1_1_module_selected_category_key=overview&ui_trip_management1_1_theme=green&ui_trip_management1_1_show_invite_member=false&ui_trip_management1_1_show_trip_create_from=false&ui_trip_management1_1_edit_member_check=false&ui_trip_management1_1_invite_member_check=true&ui_trip_management1_1_show_add_room=false&ui_trip_management1_1_check=false&ui_trip_management1_1_auth_token_id=10&ui_trip_management1_1_is_empty_trip=false&ui_trip_management1_1_show_food_create_from=false&ui_trip_management1_1_show_add_expense_form=false&ui_trip_management1_1_show_edit_invite_member=false&ui_trip_management1_1_updated_input_value=false&ui_trip_management1_1_alert=0&ui_trip_management1_1_user_protected=0&ui_trip_management1_1_contact=0&ui_trip_management1_1_member_filter_category=all+members&ui_trip_management1_1_total_expenses=930&ui_trip_management1_1_avg_per_expense=310&ui_trip_management1_1_total_transaction=3&ui_trip_management1_1_expense_category=Food&ui_trip_management1_1_expense_amount=2000&ui_trip_management1_1_expense_paid_by=nanthakumar&ui_trip_management1_1_expense_date=15-01-2026&ui_trip_management1_1_voted_member=Nantha&ui_trip_management1_1_voted_food_name=Briyani&ui_trip_management1_1_voted_time=10+AM&ui_trip_management1_1_voted_meal_type=Breakfast&ui_trip_management1_1_room_name=Room+301A&ui_trip_management1_1_room_type=DELUXE+SUITE&ui_trip_management1_1_room_status=AVAILABLE&ui_trip_management1_1_room_capacity=2&ui_trip_management1_1_assigned_members_count=1&ui_trip_management1_1_room_member_name=Nantha+kumar&ui_trip_management1_1_room_member_role=Member&ui_trip_management1_1_hotel_room_type=AC&ui_trip_management1_1_vehicle_type=AC&ui_trip_management1_1_notification_name=New+Food+Poll+Added&ui_trip_management1_1_notification_desc=New+Food+Poll+Added+New+Food+Poll+Added+New+Food+Poll+Added+New+Food+Poll+Added+New+Food+Poll+Added&ui_trip_management1_1_notification_img_src=https%3A%2F%2Fmenakar-omstudio-dev-assets.zohostratus.in%2Fmembers_blue.png&ui_trip_management1_1_notification_time=2M+AGO&ui_trip_management1_1_divide_amount=53350&ui_trip_management1_1_total_amount=53350&ui_trip_management1_1_balance_amount=5000&ui_trip_management1_1_spend_amount=5000&ui_trip_management1_1_expense_room=22100&ui_trip_management1_1_expense_food=11750&ui_trip_management1_1_expense_transport=8500&ui_trip_management1_1_expense_other=11000&ui_trip_management1_1_expense_accommodation=39&ui_trip_management1_1_spend_for_food=2000&ui_trip_management1_1_spend_for_room=2000&ui_trip_management1_1_spend_for_activity=2000&ui_trip_management1_1_spend_for_transport=2000&ui_trip_management1_1_spend_for_accommodation=2000&ui_trip_management1_1_available_seat=true&ui_trip_management1_1_show_add_vehicle_form=false&ui_trip_management1_1_show_assign_seat_form=false&ui_trip_management1_1_show_emergency_contact_form=false&ui_trip_management1_1_show_sos_alert_form=false&ui_trip_management1_1_show_assign_room_form=false&ui_trip_management1_1_selected_expenses_category=1&ui_trip_management1_1_current_selected_room_id=0&ui_trip_management1_1_show_itinerary_form=false&ui_trip_management1_1_show_poll_form=false&ui_trip_management1_1_selected_category=Food&ui_trip_management1_1_show_update_expense_form=false&ui_trip_management1_1_show_seat=false&dropdown_trip_users514_111_selected=1&dropdown_role416_61_selected=3&dropdown_room_type449_68_selected=1&dropdown_expense_category465_88_selected=1&dropdown_role486_95_selected=1&dropdown_room_type506_106_selected=1&dropdown_poll_type561_147_selected=1&dropdown_expense_category585_154_selected=1&left_panel_trips377_392_selected_main_key=true&left_panel_notification380_393_selected_main_key=true&ui_trip_management1_1_trip_status=ACTIVE&ui_trip_management1_1_current_selected_tripid=74&ui_trip_management1_1_current_selected_trip_name=Goa+Beach+Escape&ui_trip_management1_1_current_selected_trip_location=Goa+&ui_trip_management1_1_current_selected_trip_s_date=02-Mar-26&ui_trip_management1_1_current_selected_trip_e_date=02-Apr-26&container_all_rooms266_986_room_occupied_count=0&container_all_rooms266_987_room_occupied_count=0&container_all_rooms266_988_room_occupied_count=0&container_all_rooms266_989_room_occupied_count=0&container_all_rooms266_990_room_occupied_count=0&container_all_rooms266_991_room_occupied_count=0&column_940_348_pressed=true",
            gitHubSrc:"https://github.com/nanthu321/Dictionary-App-HashMap-.git",
            category : "Group Project"
        }
        ,
         {
            imageSrc:"./src/assets/images/betterup.png", 
            title : "Better Up Website Redesign", 
            description:"This is a recreated version of the BetterUp landing page built using HTML and CSS. It replicates the modern design and animations of the original website using CSS animations and transitions without JavaScript.",
            languages : ["HTML", "CSS"],
            demoSrc:"https://nanthu321.github.io/BetterUp/main.html",
            gitHubSrc:"https://github.com/nanthu321/BetterUp.git",
            category : "HTML & CSS"
        },

          {
            imageSrc:"./src/assets/images/hash_set.png", 
            title : "Dictionary App Using HashSet", 
            description:"A simple dictionary application using Java HashSet to store and manage unique words. It allows users to add and search words while preventing duplicate entries.",
            languages : ["JAVA", "SQL"],
            demoSrc:"",
            gitHubSrc:"https://github.com/nanthu321/Dictionary-App-HashMap-.git",
            category : "Java"
        },
          {
            imageSrc:"./src/assets/images/social_media.jpeg", 
            title : "Social Media Workflow", 
            description:"A simple Java console application that simulates a social media workflow with features like creating posts, liking posts, and adding comments.",
            languages : ["JAVA"],
            demoSrc:"",
            gitHubSrc:"https://github.com/nanthu321/social_media_app_with_db.git",
            category : "Java"
        },

      
        {
            imageSrc:"./src/assets/images/workit.png", 
            title : "Workit landing page", 
            description:"This is a landing page for the Workit platform built using HTML and CSS. It presents product features, a founder section, and call-to-action elements with a clean and modern layout.",
            languages : ["HTML", "CSS"],
            demoSrc:"https://nanthu321.github.io/Frontend-Mentor-Workit-landing-page/",
            gitHubSrc:"https://github.com/nanthu321/Frontend-Mentor-Workit-landing-page.git",
            category : "HTML & CSS"
        },

          {
            imageSrc:"./src/assets/images/ALTITUDE_BY PIXELARITY.png", 
            title : "Altitude by pixelarity", 
            description:"This is a modern website layout built using HTML and CSS for the Altitude template by Pixelarity. It includes multiple sections such as feature cards, content blocks, a signup form, and a footer with contact information.",
            languages : ["HTML", "CSS"],
            demoSrc:"https://nanthu321.github.io/ALTITUDE-BY-PIXELARITY/",
            gitHubSrc:"https://github.com/nanthu321/ALTITUDE-BY-PIXELARITY.git",
            category : "HTML & CSS"
        },

        {
            imageSrc:"./src/assets/images/webwave.png", 
            title : "Web Wave landing page", 
            description:"This is a modern interior design studio website built using HTML and CSS. It includes sections like projects, services, collaboration process, customer reviews, and contact information with a clean visual layout.",
            languages : ["HTML", "CSS"],
            demoSrc:"https://nanthu321.github.io/WEB-WAVE-LANDING-PAGE/",
            gitHubSrc:"https://github.com/nanthu321/WEB-WAVE-LANDING-PAGE.git",
            category : "HTML & CSS"
        },

          {
            imageSrc:"./src/assets/images/sunnyside.png", 
            title : "Sunnyside agency landing page", 
            description:"This is a landing page for the Sunnyside creative agency built using HTML and CSS. It showcases services, client testimonials, project images, and a footer with social media links in a clean layout.",
            languages : ["HTML", "JS"],
            demoSrc:"https://nanthu321.github.io/Sunnyside-agency-landing-page/",
            gitHubSrc:"https://github.com/nanthu321/Sunnyside-agency-landing-page.git",
            category : "HTML & CSS"
        },

       

      

        {
            imageSrc:"./src/assets/images/recipe.png", 
            title : "Recipe App", 
            description:"Developed a web application that allows users to search for various recipes quickly and easily. The system stores and manages user search history for better tracking and user experience.",
            languages : ["HTML", "CSS","SQL", "Node Js"],
            demoSrc:"",
            gitHubSrc:"https://github.com/nanthu321/RECIPE_APP-NODE_ejs-jwt-database-express-.git",
            category : "Node Js"
        },


        {
            imageSrc:"./src/assets/images/online_learning.png", 
            title : "Online Learning Platform", 
            description:"An online learning platform designed to provide easy access to educational content with a clean user interface for a better learning experience.",
            languages : ["HTML","CSS","JS"],
            demoSrc:"",
            gitHubSrc:"https://github.com/nanthu321/Online_learning_platform.git",
            category : "JS"
        },
                
        {
            imageSrc:"./src/assets/images/rps.png", 
            title : "Rock, Paper, Scissors Game", 
            description:"A simple Rock, Paper, Scissors game where users play against the computer. The computer randomly selects a move, and the winner is decided based on the game rules.",
            languages : ["HTML","CSS","JS"],
            demoSrc:"https://nanthu321.github.io/Rock-Paper-Scissors-game/",
            gitHubSrc:"https://github.com/nanthu321/Rock-Paper-Scissors-game.git",
            category : "JS"
        },
        
        {
            imageSrc:"./src/assets/images/wordle.png", 
            title : "Wordle Game", 
            description:"A simple word guessing game where the player selects letters to guess the hidden word. The game reveals correct letters as the user guesses them.",
            languages : ["HTML", "CSS","JS"],
            demoSrc:"https://nanthu321.github.io/Wordle-Game/",
            gitHubSrc:"https://github.com/nanthu321/Wordle-Game.git",
            category : "JS"
        },

        {
            imageSrc:"./src/assets/images/pan_cake.png", 
            title : "Pancake Game", 
            description:"A simple Pancake Sorting Game where players arrange pancakes in the correct order by flipping them. The goal is to sort the stack using the minimum number of flips.",
            languages : ["HTML","CSS", "JS"],
            demoSrc:"https://nanthu321.github.io/Pancake-Game/",
            gitHubSrc:"https://github.com/nanthu321/Pancake-Game.git",
            category : "JS"
        },

         {
            imageSrc:"./src/assets/images/scratch_quiz.png", 
            title : "Quiz App", 
            description:"A simple quiz application built using Scratch where users answer questions and get scores based on their answers.",
            languages : ["Scratch"],
            demoSrc:"https://scratch.mit.edu/projects/1193142169/fullscreen/",
            gitHubSrc:"",
            category : "Scratch"
        }
    ]
    let filteredProject = activeFilter == "ALL" ? allProjects :  allProjects.filter((project)=>project.category == activeFilter)

    return (
        <section id="projects-container">
            <h2>Featured Projects</h2>
            <TextWrapper text="A showcase of my recent work and creative solutions."/>
            <div className="filter-container">
                {filters.map((filter) => (
                    <Filter text={filter} onClick={setActiveFilter} activeFilter={activeFilter}/>
                ))}
            </div>
            <div className="project-cards">
                {filteredProject.map((project)=>(
                    <Project imageSrc={project.imageSrc} title={project.title} description={project.description} languages={project.languages}  demoSrc={project.demoSrc} gitHubSrc={project.gitHubSrc}/>
                ))}
            </div>
        </section>
    )
}