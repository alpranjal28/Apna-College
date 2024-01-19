import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
    const INIT_URL =
        "https://media.wired.co.uk/photos/606dba04751ea43ccd9898b5/16:9/w_2560%2Cc_limit/london-heatwave.jpg";

    const COLD_URL =
        "data:image/jpeg;base64,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";
    const HOT_URL =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVV4r2psjqJH5zgwkIBPiZ73GpA93v236Zw&usqp=CAU";
    const WET_URL =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcWFRgWFhYZGRgaGhwfHBwaGh4fHBwcGh4aHRweHBoeIS4lHB4rIRoeJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQrISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALkBEAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQYAB//EAD8QAAEDAgMFBwMCBQIEBwAAAAEAAhEhMQNBUQQSYXGBBSKRobHB8DLR4RPxBhRCUoJykhUzYtIWNENTorLC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAQACAwEBAQAAAAAAAAAAARESIQIxQVFhcf/aAAwDAQACEQMRAD8AjEgiKcCKEfe6luzCD3jNwQJGpHK6VfBzIgzQfJU4TiC2s9c78/dbzPVePU4mHugS6ZuPl0u5piTWv2/KvjY0uOkketfnBCIqROU+E3XXx3O2kMeJ5+aq4mxvIrxIr7eK85hAHCeWX5V8W54wR1/KoPhvJTGFjHNKMJIGVET9SCJWbNDBxJNdT58OiuME8fTjRBcZrH7qcHEgwfNP8B8VhAqI/Khj7HoiveN3dINRTmPwUow3n589kncVpNAbBqP9OYNYRmPmABY56GonVKsxgGZGhvPoPlF7ZtrDaWMd0m1D40p4rA0Ns2QgkmTyNQdDneeKG/BFBR2pOmYgzXWtkodtMzmZk2mZsM6iNb80tgbVYAwdawCfmlJRdgmI2ZaxhrSQ2s3iYO7LZ480rtAeAHB9mxMERI3oMAHS/DRN4PajmiA1sf3xJqcxI85VMXFaW7zN5pEjvSRuxlkK+/CZanRZ23QDXdcA0i81qa5QYztFkNm3ghwMBpFRJIJN/OfFKl4mQTNaiWwTUfOKRxtocCHZQATe9IjpwpCvHWde2mN6hvb/AExSudlIfJ3wIm82Ft75wsg4rHEEkWF+Z1/qNqaIuyvaCWvJIIMRWuVTECbxxW8AMZ4DYpQiIOnKnU8FGM6BJ1ryvbrKHtALtbD0Qm4bnAjOBaugHqrIC4W1OJjQQOQki18kRgc9pNo70Rxyi+fhwWfgsLX3kC8ZHjPJaGzEl7mmda1J+SlKAwEzvAxefnH0V5EQGiGyAY1P3+aMO+kQR45G3MzKAYsKEtE1pFwIpNpvkpvaarimQIrqcgLU+T4Jd5n6vhN/NRiGWyDYkitvkFE3N4TxP39z4K/FeewACKyM+CVcZEgfOSYxcLuHVpt62EdF7DwoBmLA5fP3S0Cw3iQdIXg2p+SocO9b5c2VnvoDxI+y1K1HV4s5fJt5qjMQHuuoD+CM6RCM5osXEmJsMrfPRC/TLmkgTBFRcTIEi8SKmwMahc55SspdgR3t6aTapi+on7qCN5zYFXUnQ5KjcUhuh+/BWbBAg/j4VfHfpFXMjeaTZ2umh5FQ98gQAKNFBctBHnQlQ98OOZMeJp+FYNiGu7pBE8IP4WlaHZ+zsdvh7oiAwgiNRTOQLc6i4UeAKVMZ+iozaN0OAJ71KaCTXrHmpY+aHP7yhTDhQgcD6WUB9B68ghtdUZ0TDGZXrpkaKegbDdvAajjfLpkhvBBjzy+Qj7NgbpqCKR6fOiOcHeMuGWQ0MeazuKphM32mL6cqqH7IWs3wBvNP014ARSDNPEIuyMIMxY1HXzp6KnaLnNO/0pIIoCJrFws3d6C2JtMsq1sUiBFJNBFqwJ4pF+MAYGkZUzv8uj7S8hocCRIExwq2oiUtibm5bvH6QBNpma3+Zq9JVnkxwPvWPXLJCdiyIJiDSOPPKo4X6i3+6Kx66zxpKGwmb584BjLM18kxhc4ZLjM96p0IsZ8fVDGAAS0RvOtNpMRA1yninmAGCG1zpXKRT5VQWAmYym8RNcjzVtaZmzhzqOMbtBSgcJoQaTTmQCo/QLGkisTFNTAHE8eS1cFjZuWjSJobychVCxcxTO1qH9ldGO4mtL+Jm9tU3s2AA875B3rDLI55STwqjbUYDYAO8BMiI0nhX7JdkkEx3yIAjKCZB1yS+SWg4m4BRoLtRNTw1i9Qb9F7Hw4cw7wqJoDMmkX5fIQSIO7MVjx+BX2mXiTeJMWFBQCOnNJLqr4+G4fWYHOmvjQ+KQxcSDlG8RP5RMd+9XUZ8Es9v/yFuIofNXFwVrhaOPv6SjtcNwxmQeo9b/M0ySRPz5VMbJhmJpHiIznqQrZCw7szA7el0kg1PHXVKmhG6bGtfOMrK36hBBB/qqOdPC3igbS4b7gRrEf7qrMlSRDB3m04eP7qH4cAg36UiuVlZz5I3c/VTith5JgG8ReQJ4XnjRWVqOiG0briDUgmlwIiacZKNgbRuvoYbW+jhal7wlXADvGpdWeGiG2aRkSOg9MvBYnjLO2IOMQVa6oB404jopwx390/2z5/sh4ryCZr9lbZYLnFxqBA4mkTwotyY1BMMwSYpJHQW91QmXjIHXw9lMCDM1ExOc/b1VHUIEg7sRWaGecK/Ve/TN8vgXgruMQaR4ZeaoxlDrE/dNQXDNL2Pl8hOtNb0OfNIYLrg5iD5QmbAVB9b/kjop5DSZjkgV6cj5VJ8UyyoNaZzw+/sVnbJNZOfK9qpl1Ab2qCLDOQefBcqp1rwKzEigM/M0u7F3waSQAYI+oHIE8jxSrtqO6QRB4ATIOnRKDHMiAHFwNRMNFbgRNRlopNiabe9kFu6K1IORyvy8ysbaNp3t7nqZgCAPDx8Zc2UGuoFRMHUGKTXxhIY+yVcZy1B09L6rXj/S6puwAIkuIiQRQ2g2NyvYeHTvgiCDQCOPWYhewGud3YNqUpQH7Edc1ffe2roItIrEQY4E6H2WrqYb2Jv1BpcIm9jwGlT0S+K8gwb/MzxTbdo3mwGxPA3zPAJdmy/wBzrkxOtjBzy5G6zv6WIMm3jWhykqmM/doCHWBIPt0TWPtBYaAAN3Xagx4ZUpe6SfitdIeTSSI+okTHnUjiU9pnwvtLpkcZEnI1EnMmh/dB/Ug1qBmBTSYyoSp2p8xTd7uvE25IZZI3qwb9KHl+VueKrvjfoBVsiYgHPwM+Cjb3hkgMgkzJORqJpXNRj4w3RAqDXSlfM7yU2kbzWuzgtP8AiaSeRHgtYqm/I5H5XwVn4fdJ/sI8HCa9RHVeeyBFKjLoQepUMbJcKmdM8/bzRVHNjSJy8R6ouFiQCBB0nKfyIV24YNzGR+dPMJfFdJOQMz8srRcvJ07wvp8hU2upa7+4V59FH9NprxzEmtsj5LzmywCRIM35qL6Vc7dAg1GYNa9b0VP1Zjw9/UrzTIPESEuw3rGapHcu2eS0uFCNRnkYqBKSdhEF0ggV+0HjTyVmMO7QneabzleOV0fDedx3eqSAWmstg1GcggeS5TYxAA5paBHwW9URjC4bsgHnn7LzcK59D8+BXdg2LSZF5Glclq1NBeCHA3g19fuFBZ3iBXRN47G7rTMVNRXyVH7NTe35OYIjqPBXlGgWNkFvD0oUTBbYR+2aHgP70D5IVsOQRwP5CtFjhFp4hGfgkRofI6+Hvor79RW8fZFABEmZBuPnALPLPYJsbRe0AgjXl8zTeG8lwbH1TY1MZ9EmxhEkERIrY1iJHX1TWDjC+uWdNFzvYBtLd5+61vepxcYMGtYE/LpJ8sBDmkZd4RSa5cgaVpyWrj4AcRLz3RIECfHmOq87CBLSR9PWmUnOKQVZNXGTsodvS4EDi0tDifqrBjrSq8+WvcLAkCaGZiN0EcQfutf9BpiWilqWuDmmNowGvG64UpWK0PkfuhhNuytxQ1+5BzqBUUNgcxFRkdSs3btlLYH9IIiLzcQ6BN9PBaO3BzGhrPpFTGQynLPikNqxnuYN5pJIBraBeBkBVNLQWthsie6QYBuDPlbJB2h53qGACTNiJ8qmFU7QQ5wmJpTObQcx90u58xN47vOk2zlMtZQSC0yZE0Os6oDnAVjXMzpU9EUsAECwH1ajlHyUBxjvUItzn3utwBxMQOEZ6ZZammqs0HdI0qIOse6NuN3SRPSIFxM51+FC/VuNRnM5rQCxpgg8CM7ZeBR9kdLSIFINc4oa2GV0uCQbUjpprf8ACZeNx26LEW5giaX5ooO1YYaSwTIJknxpPK6FhGrdR6TH2Rd1wIOgra4NusC2qq3CDSJuetxFucqqsKNEt59RRKPFP+mTSZoap3aXTrEFxH9UXqNb21SgAoINeN/aymkewBLHC9JjkZ+/iqgb0Bt+dupR9noTNO9BHMT+OvFBw8EyQKxPH6ameg8FNF8DZ91xa6REjI3Ij1yQzsoa9w3jInnNLUOc+q1W7BvMBbAdpOcTNc7+Kps+BvOLiYeDcitKH0PkpaafZiX4+s091Ix6jz6IJBpNL8l51BByJ81cjJ52JXu9RoqMeaTwrx4+aVa/ifyLe6JvSfOMp59SpxTDRIDLeFZzztkrs2nu26RWkZaeSDgEVBFvMHTw81f9QCYJBHpyI4eazYYjad2WlgiRUqBcu6pkPhndmdKWrl7oOG2fRa8b00l47sg2p88EbZtDmKpYOy4BMYBIB8jpMp5ekMsbvmBx8j53RsHCO9BEVA0r+VXZ3Rak5+fqjOJkRfKFhcMsiK38x5KjqEmCA4zQzUZHVRuzQCSRlUi2WdT5FXYyRBbTjlAtqp6UPfGlft+Uwx7S2kilZsfsqt2YCsjSDMeKrgM3TFeXtNlqWVSz+0GFsCQXAtBNpiQaVzHFZn0GHO3iaAVgVJdvTUzSgQduO69wsN+0iIBnKlsslLNqkyIBtvWkG5LrTAFYzKkZDdh7hlwAMGQ4EHOrQeuRskdpcA7ea2AOMkcddCea3X4DQ4Ncwue913TFY8PqmRanJXf2AHuE91tKSCJ0GYpz/pWtwxzbhSgNongPwQq4zfppEU52+63u0OzO8WsEAAGlbQInlX5XN/kAZ3nTui0GwyoKZq6mE8Andg29JkQPmaq3Ah0lwBF5zrYTeSYiL8kd+zf2kXFzpXLqq7XhSROmXkByqeqsFGBpJ7xETpaJgDXTp0h0OAirqACk0kCvUK38u4NEzFABlIvS+h8slVmJAc29qxbprbwSKrivcQNCZEW/Jn2U/oGJvBubaZdD1QRvOcSDa9a3nwNUw/aDBbuwKyNaHdrpPmFQvjPiIzFRwJn38gkmF0WMVPt+EVhJdfPPjOaNtIIoJBHhJ+rPis7gthd53dArUTESCM87KMJ7axQmCdIBiOAiCr7G0wDu2NcgIgnkaH5Cvjs7x3BSZEWrUDjmsXRGI57x3WuO73ZAMu0tqRKUx94APG9JEW1mIMaDzW12ewy6aCGkdBocqFOtbvUNRlQcxP8AlY5RkrL9WMwvMlpz+UUOOZ6oZyKnEdBBHPy/ddsTDmHgggwfJQW7skzHzPIqcDEJhwvFRqMuqs/GqYGlPnNY2ooD3/8AUJ6/uEw8d6ljX7qThghsGoOlsxHn4BEEGnAxHGvVTlsN1DjpaLcQVTeGWlPVEDRu71QZr1oRwv5ILWzySelGivMIuCynGfnzgqEREkZx5EckUPEkCBpBnP7K1RGYmVkXDxDTy+dEGKkHzEeanBoYn3UkGlhYjRunQ+TgpxHzXznLMQAly6ARSvta6HiYmmaznYcY+DMUVmYsOj58qkN4wK+fmrucZafki6YYaxez2PO+ZBrUG37+NVnt7NYGlpLrzShrTSIiOvNabXS0i3WvyiA94yEajip4i2HhtG6RcCJz0ujNfEWiPBKsqRWqMNd2VqxVsQuNZz1r0WXtGyjdeQIca9Rp5p1sinVU2k9x+u6fQ2jkrhjC2XCLy6THdB66Jc4O80hpND+/MSB6LQ2AGCBmI+eKozAdNRcxflXzKtn4WYzcXAggindgamJM6TxKFgtqRI5m185sIM9FsP2SdCRHAHWYWRis3JaZ3jckZGZjy80jOKuxtx5NHUzqDBqZmvNAc+7vpqLWpnBt+UbZmlwgCSAQbW5HTurR/kBQgxIG8NSBT080vtWPs4O/ugAkmnQHKk24Zom2sIgj6iaeVwfDrKfGwboDhUzXpz/qPHVLPYZrQxSfGR5rHlupYM2xkXINRyBnh+FbCwQ2pJactDUQfAW43yVuz8MkbwJcXFzTnUmazYErRw9jdB3wCLGgMRGYFKJJVkpbDe47sCbjlEdRdPYTN2uc+c5/M17AwgKAZ510z5K7GySPhW8akc20yPT39kVrJZOYv5/lLYJgj5eyKCWzC3WRcAR7elD18kZ4qHEzbrf3SYefcDlb0TuHhywgGYqOv5WbEwTCdBItFRn8FfNNYbgWxGc/kJVjCRJi0X9UxhZZA0rFD9vC6yRYskRxy8uWfmvblKX+9UNtDWhF715JjAfMDnSOqKLg4W8B6G1MvBS3CYILQRWCNOEeY5dBG/ui2dDrmqvxCYprXM6Ap2Lv2aO9MyM6c6K0QRX0P5RsE0+41S+KyDFwntVsVm7891SaVyPrZWgkRwUBhrS4+e6sVGG6ngmh9Mi4KFgYJ0TTMIyYBrRKizDn6X4xxQXg5C56/nmmMDZ317pPT1hHOwuMwI6+ykmGETINeaPhuTTOzXG4Hij4fZnyFauEC/jSbWPNUxLRQzINNeK2W9kjirDswTZTF4uK7PZU8h1rC0mYczT5VT/DOAHPc05M9C0LpmdnBa1ccm/BdkKx8lZ+N2S5zoygVnoev3Xe/wDDwpGwBE4uG2HspzQZiST4WHoCmx2cSux/kwqP2WtkXHLt7N4eqs7sVriCW9NQLA1tUrphgcFO60TJAjUgRzlS4vGOUZ2GWnuUEZzQ8OGafw+zQ3XK50n8eC0Np25jASCHHQGfgXN7Xtz3mXGdALeHRMjNkjX/AE2A1e0dRks5j2jFcZ7uvQe6znYjqQJ+QqhzjceCdrN/GAzPl6VHmivrBFitrC7KYLkmOI9k2zs5gEbpPinOfjGOcYwrS2LB975hbLNlYKBgnomcLBsQAnK34vFhOwCKBszpllnlbzVxsLp7rTBuMumi6A4FdPnVHZs9kynFz7Oz3zOfHMaFMYfZrpmQKzmt5mzjgiNw4TKvFjf8LJmtDlx6lEw+yAP6lt7gRW4YTF4xks7Majjs1kTC0QxHYFFyM5nZzP7QiM2Fo/ob86LRaxF/TRcZzdkFt0eCuNl4LQ3eCkMTTCbNkRBso+FNfp9V79OP2TVwuNnHBWGGEYtqvDl88UMD3RqvBo+BEaDavgVYYZN56D7ojh/4VbG0vH/S8eD2/ZdlAXH/AMKCdqfGe/H+6fZdyMAlLQuWifwp3Ez+jwHl9lV+zzeOspq4UcRqB5oOJs4Nf1nDkwexT/8ALDh4H3VXYI4eCarJf2cI/wDMOP8Aif8AuS7ux2/+6D/gfutlzBr5Jd+GPgQYr+xwIIxGn/Ej3QH9kj+5vmtx7ABMgASeX2Wa/tLC39zfE+XQxBV1nSDuyptCoezToE9/xjBkjfaIiZoJOXMe4Q2dr4LiQHt8RrGabF5MtjOHzJGwW8E1+mMiCjMgaa+C0wXazh+4TLGHTkrtAg8PymWP+n4EUI4efsisw+BkIsSLK0RQBRQ91XaxEDheBCuHCiCjGK7cPNS3FAXjij4VkW3EZuHxQWYwRGYw0QHaxEaxLjaBRK7T2nuyGivFBqhquGBcptnaGK8dx5bA+kGDxO8L+Pisd/aOOxxDsTEaeL3D3Uak19F/TByU7jdPnwr5k/anuMue4mblx+6GMd/97vvyqouPqLgBJjyWT2j2/hYRLaueDBaBbStvBcA55pUnn4LwplFEOLpnfxi7eEYYAzqZI5xRVxP4ueDDcMAyYkyIyEUXMEmJ6+iu90wbUTE4/wBN/wAObU3Axg987u66YvUXuu2/8S7NYvI/wf7BfPCY8fnzioxMjGnlQqrj6D/4n2bJ5PJjv/0AoP8AFOzf3O/2lcBh0MRH5ofRLxlOvv8AOiYuR9Bd/Fmz6P8A9rf+75KA/wDi7ByZieDAP/v8hcLiOmlfyIohtfpJHM28kwyO1xf4tZkx8cwPn5CU2j+LGAfQ6f8AUFyWPiloBEHLiIpnQlZuM90TVO2PK2eo1e1u2cXGnvQ0k91sxBpU6R6lZHe3Jmo/b0VpMSd4SJtN6G9qhSC0gje4ipzppqjl39I4uK4kiZJ45/uq4GIaEze1qDj8ujtwASIMyRHAx+EDG2VzXEggAGZnjwV2NeOfX05mDmi4WA0CDXrVWaJ0Xt4DMXstqIwgTQeB8JUnHcL8KUqlxjiOvEdVDsQugHxQMNx3TExYphuLGQHr6pFj4IjiiPxPZQGbJrOuWSI1jomhyysgNxROkWAOfXmn2CAL8p14opHGwy0cM/Gtc1VoJ/aqbfiQACASTlaRxKC4VE86HX2ogs0wfZGwmmDpxKAwt/6Z4ybI/wDMd2K9ICyLOZOY1yy4quIwGM8vgUseNJrcorHisR0/ZAq/ZJtUaWQTsRFy8jSJHkFqA80VrE0YGJ2ew3a0TkARH+018FQdhMNQ93+JmnIiviujxH3FDrI+SkXmswOgj0SNMU9gAmG4saB2GRxvn6qjv4cxIo9nWR7LZLBcCDnW68500lwpk4/dXE1z7+wMbLc/3GPAgKj+yMYCrJvYtz6rog4im87yNuih+MRn4hMNrln9n4sfQRfKUu7Z3j+hw6HiusdtbhNASgYm1HNlaa6c6phrlC0tMljgRwPzJV2h1TevA5iV1D8bP9PzKu54gEsPKRbimLycg3EETWRUoLyASK86ea7Esa6m4OsFUdsLK9xvC05ZkaphycY54y+fj7LxxJBEg8qH0j911GN2e2RusHMx7JTE7Ki7WxwmPIhMOTnHuBilOlJAB+ckIEAWHOsgDSsDLiuhOwYcVBB/0vNxGmiUf2a0zDZ6GdExNjKBaAYaAAQc7m+fwIG04bCKOM2IAEcKnh6rSbscn/lvtA0MRo3h5oWPsrABvMe0mL73/ZwU4nTt37TuxEE311uhB++etIul2tgiY4/smtnwiRIgitLHz9yujDzMO/zRXc+sG2U0Vv0yALilZI9RkjYWGG2BdlIJpOnLVFUdhD+4CBr8rOSLuBw7skgxSgGpIIp+V44LQKtkmwBNeaZGGSBLY0GniIHQqKDvNbumASTQ8qUH7JhuPUEtIpeuXMCnGyq3ENaUygX8KlXbi0+sNngJ8PwoPYeK5zvpEcQCfVQMECpY6+nsqfrgmr7WAnzg/IVg7eiHO6E20qgMxgmjCOJA+9VLsJ2QaFLMIzMmDqT8KKXEXcAON/NZC+HspM1b0qmWYUf1dF7DdoQRyFSrCf2hBIaAvcl4gBeMH5KNIcgvFUZwQ3BAvSeqG54RnNGcIRYNPnJGUgyg7R18UTei3y6BjPJ0QLudemaq95noqOYJPFQR4wtC7HmPuiF5iOqXBhE/VaP6hlYjrndAbAk3TYZy+dUiypoO7ll5FHDJv6jwQWx8H5Ky9sBBpOt1ovYYsR0H3lJ47SgycVx18/wgnEM0kGlZzWs9g3R6c8wky0UkeSDPGI8G5oeMeaL/ADbwIkkARUTC0mYbSLCZzGSqIAgAReyBn9QRvhkiDUvAtwRmbUaEgWtWB4hZ+L9DF7Yb9PcLbLSbtEiQ18zJLpA6Zq7MVzjQCQR9W8ZHUn5Ct/6Xh6IOwf8AMdz+6ir4m1OB3Z3a2J5Whtuqph4lK7zp4e9SVsjLmVnbRlyHqopd8mIbap4A6m682atgUGgnwF88ygN+l3zVWZcdUBzi1ABgxkMuSKYqYaBOsO83JXHsOX2U4n0Dn91BoMxKE18RSsXrRE/UIsRx3RbnCUZY8vdQPo6+yDQY92bm+U+Eo8znzok2/SPmahluoWRoNPJXPNKYXv7o+Hb5qjS0KjpV0LE+vw90AXt/bNCc+BXzRsZJvy5eysZEdjgX/PqgY2KCbFRhKzvb2VCZmbDmSibtIPkYUuz6KmJc80Hu6MvNSHCBB+fCh7RcdFQ2HzRA4MQDKT8sjMxW5jnB9FnfcKX+6NNF+Iz3ukcR7Tb1r5qpsgvsOYQWeKmDkTWn7pGKXrKby6JZv1dEZewzGakYmQrBv9yoZ9Pj6KG2HzRB/9k=";

    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80
                            ? WET_URL
                            : info.temp > 20
                            ? HOT_URL
                            : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.humidity > 80 ? (
                            <ThunderstormIcon />
                        ) : info.temp > 20 ? (
                            <WbSunnyIcon />
                        ) : (
                            <AcUnitIcon />
                        )}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        component={"span"}
                    >
                        <div>Temperature = {info.temp}&deg;C</div>
                        <div>it feels like {info.feelsLike}&deg;C</div>
                        <div>
                            and can be described as <i>{info.weather}</i>
                        </div>
                        <br />
                        <div>MinTemperature = {info.tempMin}&deg;C</div>
                        <div>MaxTemperature = {info.tempMax}&deg;C</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>WindSpeed = {info.windSpeeed}</div>
                        <div>Pressure = {info.pressure}</div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
