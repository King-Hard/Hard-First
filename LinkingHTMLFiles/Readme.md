# Notes for Linking HTML Files
- <!-- <a href="Link">Content</a>--> Dito para magawa natin yung palipat-lipat ng web page, gagamit lang tayo ng linking file gamit yung nasa loob ng <b>comment line</b> natin.
- Take note meron tayong dalawang attribute which are href and target:
1, Yung <b>href</b> is ginagamit natin pag maglalagay tayo ng link kung san natin gusto pumunta yung page natin pag pinindot na natin yung link natin. 
2, Then yung sa <b>target</b> naman is may certain destination tayo kung san natin gusto mag open yung link natin <b>sa new tab</b> ba or <b>sa current tab</b> lang natin kumbaga di na sya magbubukas pa ng bagong tab.
- Sa paggamit nung target attribute natin meron tayong 2 types marami to pero dalawa lang muna so yung 2 types natin:
1, <!--get="_blank"--> Bali kasama to sa loob ng anchor tag natin bali ganto format nya 
<a href="Link" target ="_blank">Content</a>
(Pag itong <b>_blank</b> yung ginamit natin tas pinindot natin yung link magbubukas sya sa new tab.)
2, <!--get="_self"--> Bali kasama to sa loob ng anchor tag natin bali ganto format nya 
<a href="Link" target ="_self_">Content</a>
(Pag itong <b>_self</b> yung ginamit natin tas pinindot natin yung link magbubukas sya sa current tab lang natin kung nasan yung link natin.)


—