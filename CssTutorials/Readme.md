# Responsive 
<!--
html {
  font-size: 100%; /* 1rem = 16px */
}

body {
  font-family: sans-serif;
  font-size: 1rem;       /* 16px */
  line-height: 1.6;
  margin: 0;
  padding: 1rem;
}

h1 { font-size: 2rem; }    /* 32px */

.box {
  width: 3.125rem;     /* 50px */
  height: 3.125rem;
  background: lightgray;
-->
# Div - Class & Id Attributes

1, class - Pag div class yung ginamit natin sa elemnt tag natin then need na natin sya lagyan ng design sa css, para ma call natin yung class attribute natin gagamit lang tayo ng . and then yung class name natin example (.header)
2, id - Pag div id naman gamit natin sa elemnt tag natin then need na natin sya lagyan ng design sa css, para ma call natin yung id attribute natin gagamit lang tayo ng # then yung id name natin example (#footer)

# Types ng sizing natin
1, rem - maganda to gamitin para sa font size and spacing natin.
2, % - heto naman maganda gamitin para sa width or ng lapad nung container or box natin.
3, vh- view height natin mganda naman gamitin to para sa size ng height ng container natin partner sya ng width natin na naka 5% percentage and then sa height natin 5vh.

# Box
1, background -
2, width & height with unit of (rem) -

# Texts
1, color - Magkakaroon ng color yung text natin.
2, font-size proprty (#rem) - Para ma change natin yung size ng font natin.
3, text-align property (left, right, center, justify)- Para malagay natin yung text natin sa certain destination
4, text-align-last property (left, right, center, justify) - Dito yung last line ng sentences natin or ng paragrapgh is pwede natin ibahin yung position
5, text-indent proprty (#rem) - heto naman yung text natin pwede natin ma align papuntang kanan depende sa bilang ng rem natin.
6, line-height proprty (#rem) - heto naman yuhng height between 2 words natin.
7, font-family proprty (font name, sans-serif)- Para ma change natin yung pinaka-font type natin, para magawa natin to need natin pumunta sa google fonts saka tayo maghahanap ng font na gagamitn natin para sa ginagawa natin website. Ngayon pag may nahanp na tayo punta lang tayo embeded, then kunin natin yung import code nya tas paste lang natin sa css natin, then font-family tas lagay natin yung name ng font na nakuha natin, tapos lagay lang tayo ng sans-serif mahalaga na meron neto.
8, font-weight - para to sa kapal ng text natin naka bold ba ganon, semi bold, and son on.

# Backgrounds
1, background-color property (all colors available) - Function neto magkakaroon ng color yung background ng container natin
2, background-image property (url("LINK")) - Function neto makakapaglagay tayo ng background natin na image 
3, background-repeat proprty (no-repeat) - Pag gumawa kase tayo ng background na image naka repeat sya ngayon para ma stop yon need nati ng background-repeat and then yung property nya na no-repeat.
4, overflow property (hidden) - for container - Para to sa pag naglagay tayo ng image sa loob ng container natin is hindi sya lalagpas sa pinaka-size ng container natin
5, object-fit property (cover or contain) - for image - ginagamit natin to para masakop yung mismong image natin using object-fit and then the property cover.

# Border
1, padding property (#rem) - heto yung gumagawa ng spacing natin between content and border natin.
2, margin (#rem) - heto naman yung spacing sa labas ng border natin kung gano sya kalayo sa main size ng webpage natin.
3, border property (#rem, solid, and color for border) - heto naman para makapaglagay tayo ng border need lang natin ilagay border then yung 3 proprties nya na #rem, solid, and color Size ng border, solid ba sya yung border line, and then color ng border line natin
4, border-radius property (#rem) - yung raduis nato is yung 4 na sulok ng border natin is magiging rounded sya parang pabilog
5, outline property (none) - magagamit natin to sa mga input types natin para may sa rili tayong border hindi yung naka default lang. Using outline with his property na none matatanggal natin yung outline then makakapaglagay tayo ng sarili natin outline using border.

# Pseudo classes
1, :hover - pagnatpatan ng cursor natin yung button or something na lalagyan natin ng hover is magkakaroon sya ng transition, example sa button from color white background to color yellow background using hover natin.
2, :active - heto naman pag may cini-click tayo parang hover lang din to pero sa hover natin pag natapatan ng cursor dito naman pag clinick natin yung obkect natin magkakroon tayo transition.
3, :focus - dito naman maganda to gamitin sa input types natin para ma indicate natin na andon tayo sa certain input type natin using border ganon or kaya naman color.
4, :checked - heto naman sa mga checkbox natin pagclinick natin magiging mali yung checkbox ganon.

# Transitions
1, transition property (seconds) - para mas smooth lang transition natin kapag nagho-hover tayo, active, focus and so on.

# Box Shadow
1, box-shadow properties (#rem, #rem, #rem, #rem, color, insent)
- Yung 1st ans 2nd # of rem is para sa position ng shadow natin, 3rd rem para kung ano ka blur shadow antin, 4rt # of rem para sa kapal nung shadow natin, then colors, and last insent funtion neto is naka pasok yung shadow don sa mismong box natin.


# Positions
1, position property (absolute) - heto naman yung pwede natin ma manipulate yung mga positions ng mga element tags natin using this position with the property of absolute
2, property (fixed) - maganda to gamitin sa nav bar natin katulad nung sa mga di scroll na website natin para kahit naka scroll si user makikita nya pa rin yung nav bar natin using this position fixed
3, property (relative) - kapartner to ng absolute position natin, bali sa container yung position natin naka absolute then sa content na laman ng container natin is yung absolute position naman yung gagamitin natin para yung content malagay natin sa exact location an gusto natin paglagyan sakanya doon sa loob ng container natin
4, PROPERTIES  (top, bottom, left, and right.) - para naman to sa absolute position natin para ma manipulate natin yung position ng container or kahit na anong element tag natin.

