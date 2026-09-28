NB.scene("ch01", String.raw`
*comment Engine smoke scene: replaced by the real chapter.
*chapter 1 After the Last Set
*date 2026-08-29 17:10
*place P02 print_shop
*sid CH01.HOME.01
*present martin will
Test page. The print shop, Saturday.
*choice
  #Say yes to Will.
    *set fr_will +1
    *goto next
  #Say no.
    *goto next
*label next
*date 2026-08-29 21:30
*place P13 switchyard_lane
*present nolan micah
*set st_nolan 1
The lane.
*page_break
*ending A
`);
