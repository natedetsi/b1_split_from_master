

//////////////////////////////questions list/////////////////////////////////////////
export const questions = {
  NCD: '<ul><li>How many years NCD do you have?</li><li>Who was you previous insurer?</li><li>When did it expire?</li><li>Who was the policy holder?</li></ul>',
  Claims: '<ul><li> how many incidents have you had in th past 5 years  </li><li>What happened? how was it resolved?  </liu><li>who was driving?  </li><li>what year? what month? </ul>',
  Occupation: '<ul><li> How many jobs do you have?  </li><li>what is your occupation?  </li><li>how many hours do you work?  </li><li>how long have you worked there?  </li><li>how are you supporting yourself?  </li><li> are you actively seeking work?</ul>',
  Ownership: '<ul><li>How long have you owned the vehicle?</li><li>Are you the registered keeper?</li></ul>',
  Licence: '<ul><li>  how long have you held your licence?  </li><li>what type of licence do you have?  </li><li>what restictions do you have on your licence?  </ul>',
  Address: '<ul><li> Where do you live?  </li><li>what is your current address  </li><li>how long have you lived there?  </li><li>how many addresses do you have?  </li><li>what other addresses are linked to this vehicle?  </ul>',
  HPI: '<ul><li>  who is the registered keeper?  </li><li>when was the vehicle purchased?  </li><li>how long have you owned the vehicle?  </li><li>how long have you been driving the vehicle?  </ul>',
  Mileage: '<ul><li>  what is your annual mileage?  </li><li>what would be the maximum amount of miles you would require for the year?  </li><li>how did you come to that amount?</li><li>how many miles do you do per month/week/day?</li><li>what is the vehicle used for?</li><li>how many places of work do you travel too?</li><ul />',
  Residency: '<ul><li>  how long have you been a resident in the UK?  </li><li>when did you move to the UK?  </li><li>how long did you live in...?  </ul>',
  Convictions: '<ul><li>how many points do you have on your licence?</li><li>  how many motoring convictions do you have?</li><li>What was the conviction for? </li><li>what year? what month?  </ul>'
}
/////////////////////////////////////statements list ////////////////////////////////////////////

export const statements = {
  Honesty: '<span class="bold-span">Say:</span> By law insurance companies are required to ask relevant questions. Once the questions have been asked, the responsibilty is on the policyholder to disclose information, anwser the questions correctly and be careful not to make a misrepresentation. Is that okay?',
  Break: ' <span class="bold-span">Say:</span> Can you confirm there have been no accidents, incidents or police enquiries during the time there was no insurance? <br /><br />IF THEY SAY NO: Read verbal disclaimer and request Share My Licence <br /><br />IF THEY SAY YES: Ask for more information.',
  Real: '<span class="bold-span">Say:</span> Please be aware that any prices quoted for any changes made to your policy today will be inclusive of a £30 administation fee and may be subject to change if the amendment is not completed on this phone call',
  Price: '',
  Verbal: '<span class="bold-span">Say:</span> The information shown on your statement of insurance and the answers provided forms the basis of the contact of insurance. If any of the information shown is incorrect or has changed then you should contact us, if you fail to do so then your insurance cover may not protect you in the event of a claim.',
  DPA: '<span class="bold-span">Say:</span> The authorised party with have the same authority as you on this policy including registering and dealing with claims, any mid-term adjustments and policy cancellations. Is that okay?',
  Cardmid: `<span class="bold-span">For a mid term adjustment</span> <br />If its a new card confirm: <ul><li>You are speaking to the card holder</li><li>The payment amount</li></ul> <br /><span class="bold-span">Say:</span>Your card could be used for future payments, including your renewal premium, fees or any missed payments. You can cancel the continous payment authority at any time. Is that okay? <br /><br /> If they say no turn off CPA. <br /><br /> If they say yes and it is a third partys card <br /> <br /><span class="bold-span">Say:</span>It is the policy holders responsibilty to tell you about any premium changes and we will notify them before taking payment `,
  Cardcan: `<span class="bold-span">For a cancellation</span> <br />If it is a new card, confirm <ul><li>You are speaking to the card holder</li><li>The payment amount</li></ul> <br /><span class="bold-span">Say:</span> The card could be used for any outstanding balances after cancellation. You can cancel this continuous payment authority at any time. Is that okay? <br />
<br />  If they say no, turn off CPA <br /> <br /> If they say yes <br /><br /> <span class="bold-span">Say:</span> It is the policy holders responsibilty to tell you of any changes in premium and we will notify them before taking any payment.`

};
