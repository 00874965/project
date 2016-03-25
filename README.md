#Assignment 1 - AngularJS app.

Name: Miriam Callahan 00874965

###Overview.

I created an App based on my own experience of having Gestational Diabetes during my pregnancy. Once diagnosed, patients immediately begin the process of testing blood samples 7 times a day, before and after meals,  to monitor blood sugar levels. If these levels go above the recommended ranges, the patient is moved onto a new phase of treatment of insulin injections at numerous times during the day also. If patients need to move to this stage there are implications, one of which is that the baby, when born, needs to be taken to a separate unit for monitoring in the hospital and does not get to spend those first 24 hours with the mother. (*because the babies sugar levels drop significantly once the insulin that was controlling them during pregnancy are taken away as they are no longer in the womb*) So, my own journey began to try and prevent insulin treatment in order that my baby could remain with me after she was born.
This journey involved researching & eating food that would not impact my sugars beyond their ranges, moderate exercise and ALOT of blood sugar level monitoring, recording and analysing with my Obstetrician and Endocrinologist. Visits to these healthcare professionals are increased so a lot more time is spent making prenatal appointments than otherwise would be. There were various times I felt that the procedures involved could be updated and streamlined so that less time was spent capturing the data for me – the patient, less time was spent also analysing the data – the healthcare professionals. I thought that time could be saved on appointments and a whole lot of money could be saved along the way – ie. Visiting the Endocrinologist every couple of weeks cost me E600 in total over a 7 week period, simply to be told each time that my ‘book/readings’ looked good and see you the next time. Below are the procedures in place currently and alongside those, where I saw opportunities to improve them by moving to a simple web based system for all. 
Current State | Future State
--- | --- 
Pen and Paper recording of Blood Glucose Level readings during pregnancy, 7 times a day, prone to damage and being lost | Web / Mobile app to log readings instead. Can be accessed anywhere, won’t get lost, won’t get damaged. Can also provide further ‘at a glance analysis when required
Manual inspection of book during health appointments. On the spot decisions on further treatment | Healthcare portal for anytime access to Patient readings as they are uploaded. Appointments and feedback can be prepared for in advance in this world, and, if readings are of concern appointments can be made to avoid unnecessary visits where no action is required or pursued – ie **Money saving**
Insufficient space in book for readings or possibilities of mistakes. Prone to ‘scribbling out’ when readings go wrong (happens from time to time). Once pregnancy is over, books are lost, along with the data | Web / Mobile app provides a permanent record of readings to assist not only the patient for future pregnancies but Healthcare professionals and researchers if they want to apply analytics. 
Immediately you are immersed in a world where food becomes an uncertainty. Even healthy options ie brown rice can drive sugar levels up so it becomes trial and error. You may try your best but be placed on insulin treatment because you just didn’t know what food would be good for you. | Web / Mobile app would provide another page where ‘tried and tested’ recipes would be available to browse and rate and a repository of ‘Gestational Diabetes Recipes would be available so you’re pretty sure (although not 100% ) that your sugars will be safe.
General Information is not readily available via pamphlets and booklets provided. You can ‘google’ GD and you will normally find out about All the other types of Diabetes but nothing is inviting or supportive or ‘friendly’ about the current means of information existing. | Many communities exist on the internet for Mums and Babies, Mums to Be, Family Life etc .. I see an opportunity to create a similar concept for GD Mums 2 Be as it deserves its own platform given the nature in which your day to day changes when you get the diagnosis. A Web / Mobile app would provide a place for information, news and support for patients so they can come to one place versus hopping from one community to the next searching for similar journeys.

###Features

+**Welcome Page:**  Static Page to welcome users. (Public)
+**About GD Page:** Static Page about Gestational Diabetes. Information and FAQs. (Public)
+**Manage your GD Page:** Functional Page:  Links to Recipes, Patients View, Medical Professionals View (Public for Recipes, Private for Patients and Healthcare Professionals.)
+**Patient View:** (Private)
+Register and / or Login.
+ Form for entering Blood Sugar Readings by the day.
+**Medical Professionals View:**(Private)
+Register and / or Login
+Table view of Patient Records
+Searching Patient readings and records.
+**News Room Page**(Public)
+Page that provides the latest GD News as its posted.
+Feature to add news

###Installation requirements.

+I decided to use **Yeomans** scaffolding tools to create my Web Application. I installed the **Angular** generator to do this. I had completed my labs up to this point but I looked into what Yeoman provided and decided that I would like a ‘clean start’ for a new concept that I could then build from. Yeoman creates a base of libraries and an index file to start with and then quick and easy ways of adding new views / controllers simultaneously along with real time Web page updates via its grunt watch feature. I enjoyed how I could make updates to my code and see them instantly without having to reload web pages. 
+Once presented with the generic Yeoman webpage I set about setting up my own. I added **Bootstrap** to my index file as for some reason my initial project didn’t contain it. I was ready to start. I wasn’t happy with the initial styling (main.css) so I added more appealing styling to my main.css I used some of the styles from www.bootswatch.com. 
+If you are downloading / cloning this app, I recommend using Grunt to envoke it. You can do this by installing Yo as I did and using the ‘grunt serve’ command. Instructions to download are at www.yeoman.io . Alternatively I believe you can download Grunt independently from www.gruntjs.com/gettingstarted 
+Once you have followed the installation steps above, using your cmd promt navigate to the **gestDiabetes** root folder and type the following command **grunt serve** You don’t need to open a browser, a browser window will appear automatically on the home page of my app.

###Data Model Design.

![][Image1]

###App Design.

![][Image2]

###UI Design.

![][Image3]
![][Image4]
![][Image5]
![][Image6]
![][Image7]
![][Image8]

###Routing.
Once launched the index file call the Home page of the Web App ... Routing is handled in app.js as follows:

+When URL = '/#' , this opens the Home page whos controller is MainCtrl 
+When URL = '/#/about' , this opens the About GD page whos controller is AboutCtrl 
+When URL = '/manage' , this opens the Manage your GD page whos controller is ManageCtrl 
+When URL = '/#/patrientrec' , this opens the Patient Records page whos controller is PatientrecCtrl 
+When URL = '/#/medirecord' , this opens the Medical Records page whos controller is MedirecordCtrl 
+When URL = '/#/latestnews' , this opens the News Room page whos controller is latestnewsCtrl 

I used the following cmd to create my views and controllers *yo angular:route manage* which handled the creation of the files and also the addition of the .js script to the index. In this manner for each View I created, an associated Controller was set up also. I decided to keep each of the unused ones as they may be useful in future assignments. To see which are active or not currently please refer to the Design Model Diagram above.

###Extra features
I added a sample Authentication feature to the Manage your GD page that I found on GitHub. This was really just for look and feel for now and its kept as 2 separate entities outside of my own work. It accepts User Regsistration and Logins using local storage services and cookies services. I want to explore this further in the next assignment.

###Independent learning.
I used the Yeoman Scaffolding Tools to create my app and so learned alot about using npm and some of the ways of downloading modules and packages for projects. I enjoyed using Grunt Serve also - the watch listener would see changes as I made them in the code and would automatically refresh my browser which was helpful. I also was able to make use of the error logging as I made changes to my .js scripts . Checking my grunt log I would see where I made syntax errors or included scripts I didnt want to etc . I found this very useful.

Future Developments I would like to make:
+*Possibility of analysing safe / dangerous readings based on meals* - Patient Record
+*Future -Possibility of triggering appointments based on dangerous readings* - Medical Record
+*Future - More user interaction such as comments and feedback* - News Room


[image1]: ./DataModel.png
[image2]: ./DesignModel1.png
[image3]: ./navbar.png
[image4]: ./faveiconpic.png
[image5]: ./manage_UI_showinglinks.png
[image6]: ./recipes_thumbnail_gallery.png
[image7]: ./patientrec_add_delete_reading.png
[image8]: ./medicalrecord_search.png"# Assignment_1" 
