import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { LoginComponent } from "./login/login.component";
import { SearchComponent } from "./search/search.component";
import { ContentComponent } from "./content/content.component";
import { ContentfulService } from "./content/contentful.service";
import { ProductComponent } from "./product/product.component";
import { PeopleComponent } from "./people/people.component";
import { LessonsComponent } from "./lessons/lessons.component";
import { PostsComponent } from "./posts/posts.component";
import { MdToHtmlPipe } from "./content/md-to-html.pipe";
import { PaymentComponent } from "./payment/payment.component";
import { CompanyComponent } from "./company/company.component";
import { EditComponent } from "./search/edit/edit.component";

import { PeopleService } from "./people/people.service";
import { ProductService } from "./product/product.service";
import { PaymentService } from "./payment/peyment.service";
import { SearchService } from "./search/search.service";

@NgModule({
  imports: [SharedModule],
  exports: [
    ProductComponent,
    ContentComponent,
    LoginComponent,
    PeopleComponent,
    LessonsComponent,
    PostsComponent,
    PaymentComponent,
    CompanyComponent,
    SearchComponent,
    EditComponent
  ],
  declarations: [
    ProductComponent,
    ContentComponent,
    LoginComponent,
    PeopleComponent,
    LessonsComponent,
    PostsComponent,
    MdToHtmlPipe,
    PaymentComponent,
    CompanyComponent,
    SearchComponent,
    EditComponent
  ],
  providers: [PeopleService, ProductService, PaymentService, SearchService]
})
export class FeatureModule {}
