<img src="captures/img.png"/><br><br>
<h2>Activité pratique N°5 : Architecture Micro-services avec Spring Cloud</h2>
<h1>compte rendu</h1>
<h1>Beidja Cheikh</h1>
<h2>Master SDIA </h2><br><br>
<img src="captures/img1.png"/><br><br>
<h1>- Première partie : (Customer-Service, Inventory-Service, Spring Cloud Gateway, Eureka Discovery)</h1>
<h2>1. Créer le micro service Customer-service</h2><br>
<h4>• Créer l’entité Customer </h4><br>
<img src="captures/img2.png"/><br><br>
<h4>• Créer l’interface CustomerRepository basée sur Spring Data </h4>
<img src="captures/img3.png"/><br><br>
<h4>• Déployer l’API Restful du micro-service en utilisant Spring Data Rest </h4><br>
<b>voici ce fait grace a lanotation @RepositoryRestResource</b></b>
<img src="captures/img4.png"/><br><br>
<h3>.voici pour enregistré les customers dans le base de donnees</h3><br>
<img src="captures/img13.png"/><br><br>
<h2>• <b>Tester le Micro service</b></h2><br><br>
<h3>- notre base de donner H2-console </h3>
<img src="captures/img9.png"/><br><br>
<h3>- liste de customers </h3><br>
<img src="captures/img5.png"/><br><br>
<h3>- customer par son id </h3><br>
<img src="captures/img6.png"/><br><br>
<h3>- actuator pour consulté mon web service </h3><br>
<img src="captures/img7.png"/><br><br>
<img src="captures/img8.png"/><br><br>
<h2>2. Créer le micro service Inventory-service </h2>
<h4>• Créer l’entité Product</h4><br>
<img src="captures/img10.png"/><br><br>
<h4>• Créer l’interface ProductRepository basée sur Spring Data</h4><br>
<img src="captures/img11.png"/><br><br>
<h4>• Déployer l’API Restful du micro-service en utilisant Spring Data Rest</h4><br>
<img src="captures/img12.png"/><br><br>
<h4>•L'enregistrement des produits</h4><br>
<img src="captures/img14.png"/><br><br>
<h2>•<b>Tester le Micro service</b></h2><br><br>
<h3>- notre base de donner H2-console </h3>
<img src="captures/img15.png"/><br><br>
<h3>- liste de produits </h3><br>
<img src="captures/img16.png"/><br><br>
<h3>-product par son id </h3><br>
<img src="captures/img17.png"/><br><br>
<h2>3. Créer la Gateway service en utilisant Spring Cloud Gateway</h2><br>
<img src="captures/img18.png"/><br><br>
<h3>1. Tester la Service proxy en utilisant une configuration Statique basée
sur le fichier application.yml</h3>
<img src="captures/img19.png"/><br><br>
<h2>Test</h2>
<h4>list de customers </h4>
<img src="captures/img20.png"/><br><br>
<h4>list de products </h4>
<img src="captures/img21.png"/><br><br>
<h3>2. Tester la Service proxy en utilisant une configuration Statique basée
une configuration Java</h3>
<h4>configuration Statique basée une configuration Java</h4>
<img src="captures/img22.png"/><br><br>
<h4>list de customers </h4>
<img src="captures/img20.png"/><br><br>
<h4>list de products </h4>
<img src="captures/img21.png"/><br><br>
<h3>4. Créer l’annuaire Registry Service basé sur NetFlix Eureka Server</h3>
<img src="captures/img24.png"/><br><br>
<img src="captures/img23.png"/><br><br>
<h3>5. Tester le proxy en utilisant une configuration dynamique de Gestion des routes vers les micro services enregistrés dans l’annuaire Eureka Server</h3>
<img src="captures/img25.png"/><br><br>
<img src="captures/img23.png"/><br><br>
<h4>list de customers </h4>
<img src="captures/img20.png"/><br><br>
<h4>list de products </h4>
<img src="captures/img21.png"/><br><br>
<h4> configuration dynamique</h4>
<img src="captures/img26.png"/><br><br>
<h4>list de customers </h4>
<img src="captures/img27.png"/><br><br>
<h4>list de products </h4>
<img src="captures/img28.png"/><br><br>
<h4>product par son id </h4>
<img src="captures/img29.png"/><br><br>
<h1>- Deuxième Partie : Billing Service avec Open Feign Rest Client</h1>
<h3>6. Créer Le service Billing-Service en utilisant Open Feign pour ommuniquer avec les services Customer-service et Inventory-service</h3>
<h4>- Entité Bill</h4>
<img src="captures/img30.png"/><br><br>
<h4>- Entité ProductItm</h4>
<img src="captures/img31.png"/><br><br>
<h4>- Customer model</h4>
<img src="captures/img32.png"/><br><br>
<h4>- Product model</h4>
<img src="captures/img33.png"/><br><br>
<h4>- BillRepository</h4>
<img src="captures/img34.png"/><br><br>
<h4>- ProductItemRepository</h4>
<img src="captures/img35.png"/><br><br>
<h4>- billingRestController</h4>
<img src="captures/img36.png"/><br><br>
<h4>- L'interface CustomerRestClient</h4>
<img src="captures/img37.png"/><br><br>
<h4>- L'interface ProductRestClient </h4>
<img src="captures/img38.png"/><br><br>
<h4>- class BillingServiceApplication</h4>
<img src="captures/img39.png"/><br><br>
<h4>- application.properties</h4>
<img src="captures/img40.png"/><br><br>
<h4>- Eureka Discovery</h4>
<img src="captures/img41.png"/><br><br>
<h4>- Entity Bill</h4>
<img src="captures/img42.png"/><br><br>
<h4>- Entity Bill</h4>
<img src="captures/img42.png"/><br><br>
<h4>- Entity PRODUCT_ITEM</h4>
<img src="captures/img43.png"/><br><br>
<h4>-Test function getBillById()</h4>
<img src="captures/img44.png"/><br><br>
<h4>-Test function getBillById() mes parfois cette fois gateway </h4>
<img src="captures/img45.png"/><br><br>
<h2>7. Créer un client Angular qui permet d’afficher une facture</h2>
<h4>Installation Node js</h4>
<img src="captures/img46.png"/><br><br>
<h4>L'emplacement du npm </h4><br>
<img src="captures/img48.png"/><br><br>
<h4>Angular version </h4><br>
<img src="captures/img47.png"/><br><br>
<h4>???????</h4><br>
<img src="captures/img49.png"/><br><br>
<h4>app-routing.module.ts</h4><br>
<img src="captures/img50.png"/><br><br>
<h4>products.component.ts</h4><br>
<img src="captures/img51.png"/><br><br>
<h4>products.component.html</h4><br>
<img src="captures/img52.png"/><br><br>
<h4>customers.component.ts</h4><br>
<img src="captures/img53.png"/><br><br>
<h4>products.component.html</h4><br>
<img src="captures/img54.png"/><br><br>
<h4>bills.component.ts</h4><br>
<img src="captures/img55.png"/><br><br>
<h4>bills.component.ts</h4><br>
<img src="captures/img55.png"/><br><br>
<h4>bills.component.html</h4><br>
<img src="captures/img56.png"/><br><br>
<h4>bills-details.component.ts</h4><br>
<img src="captures/img57.png"/><br><br>
<h4>bills-details.component.html</h4><br>
<img src="captures/img58.png"/>
<img src="captures/img59.png"/><br><br>
<h4> <b></b>Demonstration<b></b></h4><br>
<h4> <b> Products </b></h4><br>
<img src="captures/img60.png"/><br><br>
<h4> <b> Customers </b></h4><br>
<img src="captures/img61.png"/><br><br>
<h4> <b> Bills for first customer</b></h4><br>
<img src="captures/img62.png"/><br><br>
<h4> <b> Bills-details for first customer</b></h4><br>
<img src="captures/img63.png"/><br><br>







































