import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag
} from "@angular/cdk/drag-drop";
import SwiperCore, { Navigation, Swiper , Pagination} from 'swiper/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApisService } from 'src/app/services/apis.service';
SwiperCore.use([Navigation,Pagination]);
declare var xepOnline:any
@Component({
  selector: 'app-cvbuilder',
  templateUrl: './cvbuilder.component.html',
  styleUrls: ['./cvbuilder.component.scss']
})
export class CvbuilderComponent implements OnInit {

  title = 'cv-creator';
  currentSection:string="heading"
  skillIndex:any=-1
  experienceIndex:any=-1
  educationIndex=-1
  experinceForm:any
  educationForm:any
  sidebar
  setSkillsAt="left"
  setEducationAt="right"
  setExperienceAt="right"
  setSummarryAt="right"
  currentTemplate=1
  preview:boolean=true
  height="11"
  @ViewChildren(CdkDrag) draggables: QueryList<CdkDrag>;
  colors:any=[
    'black','#436975','#305FEC',
  '#0E9FC1','#7EBCA3','#009160',
  '#9097BE','#AC7BAE','#F46464',
  '#96006F','#373d48','#D39C00'
]
pdfName:string="My CV"
counter=0
currentColor:any='#373d48'
  heading={
    name:'First-name Last-name',
    position:'Position',
    address:'Address',
    email:"Email",
    phone:'Phone',
    summary:'Summary',
    summaryTitle:'Summary :',
    skillsTitle:'Skills :',
    experienceTitle:'Work Experience :',
    educationTitle:'Education :'
  }
  skills:any=[]
  experience:any=[]
  education:any=[]
  customSection:any=[]
  listOfCustomSection:any=[]
  customSectionForm:FormGroup
  updateCustomeIndex:number=-1
  swiperConfig: any = {
    slidesPerView: "2.6",
    loop: true,
    spaceBetween: "50",
    pagination: { clickable: true},
    navigation: "false",
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    }

  }
  openSideNave:boolean=false
  innerWidth
  downlloadLoading=false
  fontsize=false
  constructor(private fb:FormBuilder,
    private apis:ApisService,
    private cd:ChangeDetectorRef) {

  }
  
  ngOnInit(): void {
    this.innerWidth=window.innerWidth
    console.log(this.innerWidth)
    this.customSectionForm= this.createCustomeSectionForm("init")
    this.addContent() 
    this.addList(0)
    this.returnExperienceForm()
    this.returnEducationForm()
  this.getCounter()
}

  downloadPDF() {
    this.apis.downloadCV({templateType:`${this.currentTemplate} , ${this.heading.name} , ${this.currentColor}`}).subscribe(
      res => {
        console.log(res)
        this.getCounter()
      } , err =>  {
        console.log(err)
      }
    )
    // end counter api counter++
    return  xepOnline.Formatter.Format('content',{
      render:'download',
      filename:this.pdfName,
      pageMargin:'0.0',
      pageHeight:`${this.height}in`
    }
    )
// end download cv method
  }
  // start skills crud
  addSkills(input:any) {
    if(input.value) {
      if(input.value.trim().length>0) {
        if(this.skillIndex!=-1) {
          this.skills[this.skillIndex]=input.value
          this.skillIndex=-1
        } else {
          this.skills.push(input.value)
        }
        input.value=''
      }
    }
  }
  removeSkill(index:any) {
    this.skills.splice(index,1)
  }
  editSkill(index:any,input:any) {
    input.value=this.skills[index]
    this.skillIndex=index
  }
// end skills crud

  getCounter() {
    this.apis.getCounter().subscribe(
      (res:any) => {
        console.log(res)
        this.counter=res?.counter[0].counter
      } , err =>  {
        console.log(err)
      }
    )
  }
  get wdth() {
    return window.innerWidth
  }
  // start experience crud
  returnExperienceForm() {
    return this.experinceForm = this.fb.group({
      jopbTitle:['',Validators.required],
      employer:['',Validators.required],
      startDate:['',Validators.required],
      endDate:[''],
      current:[false],
      summary:['']
    })
  }
  get controls() {
    return this.experinceForm.controls
  }
  addExperience(formValue:any) {
   if(this.experinceForm.valid) {
   if(this.experienceIndex==-1) {
    this.experience.push(formValue)
   } else {
    this.experience[this.experienceIndex]=formValue
    this.experienceIndex=-1
   } 
   this.experinceForm.reset()
   }
  }
  removeExperience(index:any) {
    this.experience.splice(index,1)
  }
  editExperience(index:any,value:any,el: HTMLElement) {
    this.experinceForm.patchValue(value)
    this.experienceIndex=index
    el.scrollIntoView();
  }
   // end experience crud
    // start education crud
  returnEducationForm() {
    return this.educationForm = this.fb.group({
      university:['',Validators.required],
      graduationDate:''
    })
  }
  addEducation(value:any) {
    if(this.educationForm.valid) {
      if(this.educationIndex==-1) this.education.push(value)
      else {
        this.education[this.educationIndex]=value
        this.educationIndex=-1
      }
      this.educationForm.reset()
    }
  }
  removeEducation(index:any) {
    this.education.splice(index,1)
  }
  editEducation(index:any,value:any,el:any) {
    this.educationForm.patchValue(value)
    this.educationIndex=index
    el.scrollIntoView();
  }
   // end education crud
  scrollToTheSection(el:any) {
    this.openSideNave=false
    el.scrollIntoView();
  }
  ngAfterViewInit() {
    const arr = this.draggables.toArray();
    this.sidebar = [...arr];
 this.cd.detectChanges()
  }

// start drag drop angular material
  drop(event: CdkDragDrop<any[]>) {
    const nodeToMove = event.item.element.nativeElement;
    const { previousContainer, container, previousIndex, currentIndex } = event;

   

    if (previousContainer === container) {
      moveItemInArray(container.data, previousIndex, currentIndex);

      moveWithinContainer(
        container.element.nativeElement,
        previousIndex,
        currentIndex
      );
    } else {
      transferArrayItem(
        previousContainer.data,
        container.data,
        previousIndex,
        currentIndex
      );
      transferNodeToContainer(
        nodeToMove,
        container.element.nativeElement,
        currentIndex
      );

      Promise.resolve().then(() => {
        previousContainer.removeItem(event.item);
        event.item.dropContainer = container;
        event.item._dragRef._withDropContainer(container._dropListRef);
        container.addItem(event.item);
      });
    }
  }
//////////// start build custome section  ////////////

 createCustomeSectionForm(itemType: string): FormGroup {
  let formItem = this.fb.group({})
  switch (itemType) {
    case "init":
      formItem = this.fb.group({
        sectionTitle: ["",Validators.required],
        leftOrRight: ["",Validators.required],
        content: this.fb.array([])
      });
      break;
    case 'content':
      formItem = this.fb.group({
        bold: [""],
        normal: [""],
        list: this.fb.array([])
      });
      break;
      case 'list':
        formItem = this.fb.group({
          listItem: [""]
        });
        break;
  }
  return formItem
}
//////////// end build custome section  ////////////
getContent(): FormArray {
  return this.customSectionForm.get("content") as FormArray
}
addContent() {
  this.getContent().push(this.createCustomeSectionForm("content"))
}
deleteContent(index:any) {
  this.getContent().removeAt(index)
}
getList(index): FormArray {
  return this.getContent().at(index).get('list') as FormArray
}
addList(index) {
  this.getList(index).push(this.createCustomeSectionForm("list"))
}
deleteList(contentIndex,listIndex) {
   this.getList(contentIndex).removeAt(listIndex)
}
addCustomeSection(value) {
  if(this.updateCustomeIndex!=-1) this.customSection[this.updateCustomeIndex]=value 
  else   this.customSection.push(value)
  this.customSectionForm.reset()
  for(let i = 0 ; i < value.content.length;i++) {
    this.deleteContent(i)
  }
  console.log(value)
  if(this.getContent().length) this.deleteContent(0)
  this.updateCustomeIndex=-1
}
removeCustomeSection(index) {
  this.customSection.splice(index,1)
}
editCustomeSection(index,item) {
  this.updateCustomeIndex=index
  for (let i = 0; i < item.content.length;i++) {
    this.addContent()
    for(let j = 0; j < item.content[i].list?.length;j++) {
      this.addList(i)
    }
  }
  this.customSectionForm.patchValue(item)

}
removeValidatorr() {
 
 this.customSectionForm.get('leftOrRight').clearValidators()
 this.customSectionForm.get('leftOrRight').updateValueAndValidity(); 
}
setValidator() {
 
  this.customSectionForm.get('leftOrRight').setValidators([Validators.required]);
  this.customSectionForm.get('leftOrRight').updateValueAndValidity(); 
 }
}
function moveWithinContainer(container, fromIndex, toIndex) {
  if (fromIndex === toIndex) {
    return;
  }

  const nodeToMove = container.children[fromIndex];
  const targetNode = container.children[toIndex];

  if (fromIndex < toIndex) {
    targetNode.parentNode.insertBefore(nodeToMove, targetNode.nextSibling);
  } else {
    targetNode.parentNode.insertBefore(nodeToMove, targetNode);
  }
}

function transferNodeToContainer(node, container, toIndex) {
  if (toIndex === container.children.length) {
    container.appendChild(node);
  } else {
    const targetItem = container.children[toIndex];
    targetItem.parentNode.insertBefore(node, targetItem);
  }


}
