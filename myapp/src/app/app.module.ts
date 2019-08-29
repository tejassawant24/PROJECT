import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { LaptopBrandComponent } from "./CODE/Assignment1/laptop.component";
import { MobileBrandComponent } from "./CODE/Assignment1/mobile.component";
import { Devices } from "./CODE/Assignment1/device";

import { Info } from "./CODE/Assignment3/malefemaleinfo.component";

import { ParentComponent } from "./CODE/test/product/parent.component";
import { ChildComponent } from "./CODE/test/product/child.component";

import { addedProduct1Component } from "./CODE/assignment5/parent.component";
import { product1Component } from "./CODE/assignment5/child.component";

import { TV } from "./CODE/assignment6/tv.component";
import { MOBILE } from "./CODE/assignment6/mobile.component";
import { AC } from "./CODE/assignment6/ac.component";
import { LAPTOP } from "./CODE/assignment6/laptop.component";
import { List } from "./CODE/assignment6/parent.component";

import { TwitterComponent } from "./CODE/Assignment4/twitter.component";

import { HeartComponent } from "./CODE/Assignment4/heart.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TemplateComponet } from "./templateForm/templateForm(Vipul Sir)/template.component";

import { Template1Component } from "./templateForm/templateForm(Tejas)/template1.component";

import { ProPipe } from "./CODE/http-to-https/https.pipes";
import { HttpsComponent } from "./CODE/http-to-https/https.component";

import { ReactiveComponent } from "./reactiveForm/reactiveForm (vipul sir)/reactiveForm.component";

import { ReactiveFormComponent } from "./reactiveForm/reactiveForm(tejas)/reactiveForm1.component";

import { Navbar1Component } from "./CODE/Routing(Tejas)/navbar1/navbar1.component";
import { TestComponent } from "./CODE/test/test.component";
import { Product1Component } from "./CODE/Routing(Tejas)/product1/product1.component";
import { routes } from "./CODE/Routing(Tejas)/app.routes";
import { RouterModule } from "@angular/router";
import { Home1Component } from "./CODE/Routing(Tejas)/home1/home1.component";
import { ProductList1Component } from "./CODE/Routing(Tejas)/product-list1/product-list1.component";
import { HttpClientModule } from "@angular/common/http";
import { searchPipes } from "./CODE/Routing(Tejas)/product-list1/product-list1.pipes";
import { ProdComponent } from "./CODE/Routing(Tejas)/product-list2/prod.component";
import { Prod1Component } from "./CODE/Routing(Tejas)/prod1/prod1.component";
import { UserRegistrationComponent } from "./CODE/Routing(Tejas)/user-registration/user-registration.component";
import { UserLoginComponent } from "./CODE/Routing(Tejas)/user-login/user-login.component";

@NgModule({
  declarations: [
    AppComponent,
    LaptopBrandComponent,
    MobileBrandComponent,

    TestComponent,
    Info,
    HeartComponent,
    TwitterComponent,
    ParentComponent,
    ChildComponent,
    addedProduct1Component,
    product1Component,
    TV,
    MOBILE,
    AC,
    LAPTOP,
    List,
    TemplateComponet,
    Template1Component,
    ProPipe,
    HttpsComponent,
    ReactiveComponent,
    ReactiveFormComponent,

    Navbar1Component,
    Product1Component,
    Home1Component,
    ProductList1Component,
    searchPipes,
    ProdComponent,
    Prod1Component,
    UserRegistrationComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [Devices],
  bootstrap: [AppComponent]
})
export class AppModule {}
