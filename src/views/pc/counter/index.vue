<template>
  <div class="counter">
    <base-header></base-header>
    <div class="counter_wrap ">
      <div class="counter_content container clearfix">
        <div class="counter_content_left">
          <h3>五险一金计算器</h3>

          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="参保城市" prop="city">
              <Input size="large" v-model="formValidate.city" placeholder="请选择参保城市">
              </Input>

              <div class="wrap_input_city" @mouseover="isShow=false" @mouseleave="isShow=true">
                <div class="input_city_lists" :class="{none:isShow}">
                  <div class="input_city_lists_header">
                    <a href="javascript:void(0);" class="input_city_lists_header_item"
                      v-for="(item,index1) in cityListsNew" :class="{'active_c':num===index1}"
                      @click="changeCitysTag(index1)" :key="index1+1">
                      {{item.title}}
                    </a>


                  </div>


                  <div class="input_city_lists_content">
                    <a href="javascript:void(0);" v-for="(item2,index2) in cityListsNew[num].lists"
                      v-html="item2.title||'-'" @click="chooseCity(item2)" :key='index2+2'>

                    </a>

                  </div>


                </div>
              </div>


            </FormItem>


            <FormItem label="户口性质" prop="hukou">
              <Select v-model="formValidate.hukou" :disabled="formValidate.city===''" @on-change="changeSeleHukou"
                size="large" placeholder="请先选择参保城市">
                <Option :value="item.value" v-for="(item,index2) in formValidate.hukouLists" :label="item.label"
                  :key="index2"></Option>
              </Select>
            </FormItem>

            <FormItem label="税前工资" prop="base">
              <InputNumber :max="1000000" :min="1" size="large" :editable="true" placeholder="请输入税前工资"
                v-model="formValidate.base">

              </InputNumber>
            </FormItem>

            <div class="button_lists">
              <Button type="error" :loading="buttonLoading" @click="handleSubmit('formValidate')" size="large">
                计算社保费
              </Button>

              <Button style="color:#fff;
                            background:#c2c2c2;" @click="handleReset('formValidate')" size="large">
                重置
              </Button>
            </div>


          </Form>

          <div class="show_shuo_m">
            <h4>社保费计算规则：</h4>
            <p>
              1. 当税前工资<= 该参保城市的最低缴费基数 社保 费将会按照最低基数进行计算 </p> <p>
                2. 当该参保城市 最低缴费基数 < 税前工资 < 最高缴费基数 将会按照填写的税前工资进行计算 </p> <p>
                  3. 当税前工资>该参保城市的最高缴费基数 社保费将会按照最高基数进行计算
            </p>
          </div>


        </div>
        <div class="counter_content_right">
          <div v-if="empty" style="width: 100%;
                    text-align: center;font-size: 14px;color:#999;
                    line-height: 590px;">
            <img style="width: 100px;height: 87px;"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAFcCAMAAADRSxgxAAAAZlBMVEUAAACHh4eHh4eGhoaKioqIiIiIiIiIiIiIiIiGhoaRkZGIiIiIiIiIiIiIiIiHh4eIiIiHh4eIiIiHh4eIiIiIiIiIiIiIiIiJiYmHh4eIiIiHh4eKioqIiIiKioqHh4eHh4eIiIh4rA3aAAAAInRSTlMAQHOWLkVYXWQXBm0ek1OPToCMiEpphXsmNHYSDDoiob+uC/BntAAAFzZJREFUeNrs3A1ymzAQhuHlQ0ggCCatSSAY7n/MxnbAI0xat50xu7DPFV7rF43p//j2WFV9RoqHLsVFS4oFhy86RljoMOpJMTBgVJF6rpMxGc01GmQlPsGnymsQHrIaF4kGYcHX+JJpEA4MRlaDcNBj0mgQBhpMaq9B1udzTHoNwkCLSd5pkPX5FJNKgzAw4KbQIAyUmDi9y2Kgw42h0QmAfhBZR4RJSpMKV/mJ1DOFW9+ORr7EWV2QejYTBJlkpm0HT+r53G3KUhwUuMoHUs/XFX75jjHV9WIFnQVQZhQyLnetrhcr8A4Xlb7u4aHHqOpIrc7ngCZhpEHgqElW1mIm0ZuRVTWYS3WQrMmnmCtJrai7L6LHj1X5NkdIV5GV+T5IUtO3fGGiqrRugae5xjpmbFlFppAwAQRJelp2ai2+l3oKJeDKtgLmAB+NSXJPSxqL30soMIAz2xB7p68kw2IOhz/JKXAEb05EkrQuC7rXlXhAOLJKcFeKPXCZHFsMgtyQRP6Ix5C0IMBRwo5rxls8xlGghwRWXBHv8KCBAr6GBE5YEW/xoIZmOgcJhI2RCjNp0jZDsYDuZQUzQ9MmKa5kPlVuEah7sTvFm66/NpH4VjkLcxhZo/tb3tQ4k/fnLU76FvGxrbwjIYzQgf3Xk7GQA2KwcRVw8/Pv365rGYPfLP+GfFc0RrhmyE5G3BBJl67WMxNtRJ++Q9Qj/2Lh41PXRhvy8zAlkfCqPLm/FRmiTbFx/ONjnAL4q+d/Q+M3M1uN3uL45R1nNbHXzXdYflPT1YWLP73ijP8VhAHCj+xNtD2H+NObjH1WgtGRzrJogz7is1cRi0gZbtJ9H21QGl+8S3g/myLYEhbRFpXxxUHCSaQOX5ZucoBEx/jqVcA2Kw9ek3TRJiXx1Qty4g6TDR4JJ/E0RIi7MMjmzoSzIAdpQba5hNyCxB/EXRgk2qh49Erc7SzIT+JuZ0EOxN3OgrwQdzsLEhN3jwdJqrK0LJVllewtSGJzsJbbZEdBEhEPql2ylyAVhKj2EcRCDLuHICKmq5HbfpBf7J3pupsgEEAHEPWCisZ9y/s/Zvt1cdR6AdvYIs35nXhzOTIzbHqLQ4RI5rsQ18+h/0LluZB7HCFcUfst5DYFFpJ7LaSmiKz6wEn6SlKk9lkIpwhx+HSFIBThHgvJ6F3e5j3ThcxjIREOucBxQhyLeCxE3uesW4dJ5L8Q4vzD2SYsPjwWQn/i/vYZoAtvIU7wFuIYbyGO8RbiBmJMnkHfzzzPsrzihMxzEHRBP7+F/GXER0BC2bAj0iLO56Drgvkt5G8gElKXzIxqo7nr+reQKxFdJRU7QfNVSla8hVzCRzWk7Dcooyof3kJezMhb9vuk9UyG1P1Dn3cRMpGB/Skq6p2fkruHENFL9hoemevPn7mBEMFLbRs3RTtQKes4riUd2qIpFdMwuP00B+eFTJn6zERB6+h4mzXPItmWKTumcPlls44L+YjS44GfDDkxUkX0uHOV7q5HOy0kqQ9He3VGDJilPHJHV3gcFjJFBzZoRs7Do/bgUtzJXuKsEMEV26GGkPwuPC7YnsLF9O6qkG7ffqnBhpnq1/mv2r0HmrkpZKz3Ib/m5AXkw15z7lrcclGIyFO2oYzJq6jk7tqNY3HLQSFjuwv1IXklvFZsQ+xUJ3FPSL9trzYjLycut53EpekU14SIaBusQnIJ8cZ66tCjGB0TkhRshYrJVXDK1khnholuCSGbjDtwciFZs+mKrkzMuyRE1JvIrkkeV8QtRwpgh4RMLUNSTbS6KG5JJ4y4I2RsGFLm5K8QKoa0LiQSZ4QkD4ZQ8reoCoYUDsykuCKkU+u1b/IXqRlS/vs3uTkipE/ZQlGR8/Dqx1bS82Srvqn+ebHlhhDOEHkq4mSxbBvFkFSVrYyzM1J5u/p6DyfxUUjOkMi6GUNZpOxTFK7yngtbBM7hoRDOFtKQ2IC7rPUU0vJ6EUNmOIV/Qnq2oDKroE8V03N+mTFM2UIAZ/BOSJeeGn1k8sFO8qAWnjOUnD7hBL4JSbAhmsocWhpmyeklrhxFqw+wxzMhIzZDwY0bFc50jtOLwFWJ/kawxi8hU4M+TDq0x0JU2bRtUWo/Ig09kK9+zAS2eCVEtBivONFSf76FMfgQsCDGgIeyYEekkuuNYB8ZBNjik5Aag0RFdITl0aa5vBOfqu7yo1rsEemjFsZECZb4JIRg4+badmrZniLvlsOf3ZxnYTTPhMxz3397R/R3UV1eHHxRm9lRYgWW+CMkSZdYkhENch+tmjCBH4T18en0OXiOAgCSrGE7KNdVv/i3nmCHN0IE3r6hrnvsWjSNO/3jApAgGQGgi3ZCHzr9IWqfwApvhERW81e71lThCGAUgszPCWDKdvVyrVvYxU+BDd4I6W3md/nA1pSVALATgvSJAIGDDOOYR56bZ/RFyKgsBiD5phlVjjpshCCdAOCPTdjSRMliiY4fYMYTITgCUZVxxg+3qp8UgnTT/rxJ/HnWwntFgAlfhOQWCWTTgEUHYBBiVPLcBEBpkdgjMOGJkDE172eoGZJWACYhRmYB84Mhg0Ua6cCAJ0KWxi41jYI0T3iBEBo/4aO1Su2FddDyQ0iHB2bIJwzGAwPnhVCaTxCuRXNjGiGgxwshOCSMLXwoAvAqIVQ+IViFrZKb8peaQIsXQvhyh1rEqzKBFwqhlMDYWvSRwTKv+yBkWuJBZs7nxQivFULDSax8t+SYaik7EtDhg5AIyxxjvTtM8GohVCYQm2utelEGOjwQkuDRfdMwgEkBrxdCJUBoHo+UVvuCPBBSGzJ6nmJ5BXCFELrdDBYb7ouHAA23F/KxZGvjOqqE64RAxZghlbVWpe/thUSGRZABo7u4UMg6aj24Pq83uh9ydyFjqi9vovXOj0uFrDJ7a8jrPXzO3YVkGCf01WY5wsVCgBrSCFcWhdbNhQilXwVplhIsgcuFiNYwhSMt5hhvLoRjBjGt1l0vBMaHvsLgP/ur5v+/txBRYgNoA1YMVwqxXkem5i0o9xbyhb2zWVQUhqFwlIsgFbkFBBXG93/MWaVZaA93FtMQuGzdCF+bnPw0fYjRhkJzqNIAoUIqLh9XyHLDg20gjoUmDsXqFyUCIm5kxCI8KjFMA5lxH04nXYOpgNC5gV4tlJpzijymgRzC+B0o+z2lA0I59uvjkvI1DYQNwBNKmuyeEgh52bbIjMZagiwDmaB1cOJAkwK54+wzm7Rv+vxYBpLzm8OwuJmSAsHpZ1G+A31+LAMZkcUqM1mKaYFMDdJ+14VQxDCQM7RYLfvWKjUQ6dorkPaL3M9sGEiPLFYhkjc5kLlBQsvhOpVhIE/UrDgwrSo9EDqhvfuNxZ9dIBXL2iuy1CdSADLVKAc9QOdmFwjLywZpmXrSAEJiMEHA+vkj2AXCLmRELr0kDSCiN0qwe+uP1tQuEMdxH9SWOkDIoV7KGjkRs0BCrfAKoy8dIFIX+FQ69EgAmgVy4Y2P8hMnJSCyXNy/OhGzQHIgZILsvGgBoRKEItCJmAVyA0vQMSxSA/KFbFYNPJxZICEDgZS+HhBqgc7yoEplFUgVSm8fEr2isfSAFCDzeQOi3CoQVvotcCENKQL5g/4gKBtaBcI22gMXctQEMoFgvQcrxiqQA8gsenYhmkBoYLsEvPpMb49VILzrbygSVgVSAifSxZ2cVSAuXgPqReZrAvkDsidjvA3eKpCgbONxlydVIGeQSnBxo2oUCFK9bCucLhCq4169iOteo0AmICodh4zKQHwk+4k3sVEglx8Y6FwZiIvLrDyue40CeYEwhN3LlzKQE8i2scWlt8coEI4LR5B7PysDyX/wH9+FoFEgDyDyM35ZVSA4mdBGI0PjQI7IHCgDeQE/10V3sVEg/NUdcJjaQM6gRjVEK2hGgeRxID1/B20gE+hT8tHsjlEg3/FUFv80aAOpQKg+bg3INa7x+adRGwixMwNnDd+TWb9A/h+QJp7eOUZHNRkF0i+bLK8OBOyQ49Z2iAWnXu3JZHGx4bhi2TsDlTVG0ztGgYRIfcWBIcpI+2jJ0CgQlMuqV5I6uewpMLyz5waJu+k3dbKOeki3kvT7AyyaLrpojAIJeaIVF6h64OearWV7g4JZcQm3QJ1KW6uHUL3+JgcO/oq4NK/p7bEKJHQQrLYNiIbIX8TpHatAyuVGuaxSBSKdSntoAwr5d7faVlJWvc0uGuWCphxX22zdA9X7jCd7rQLh9det9TgCObCHh/getgpkZp2y1gM71IIzdyCZYBVIqP704EjbXRHIBfh0pHrNAhnBTCq/gkOfOUjuIGFuFkjBjmKdx6LpiCYHgGmQZoGwzOrWOThgBlPl4GwNs0DkUCVwmlc1IDlwIYdmi4MDaABL8Kk8fEbG3fndjNYQJ4Js1l0JyIQsVrnJ4TPIiUh3eaEEpEdD0EckAu0CmcRKgxF/sw4Qj8bdNZscYEbUAasgV1OpAHmIxQJjSTc24o8KtAqZVltpABnRdLUbLIYYBvJANqtUHKRMXxkcKQw3r2Egc81lHjhqXAGIC6thT4OUZaich9e55KmBSF7xua9R42IZenRdRTunBnIM4/32NYxfRn/e4IUuRVog4tv8zq6rEJ3V4UsMX0mBVAO++GfBt5kGcoe2wQVTnhTIFW6QQ7ugsUwDqVp4K1grd/ynA3Ku0XXJy5UB00BkNfbwUpf2nA7IEcYgB79UO7MNJAhMB98+G5MB6fEdbd+LN2PZBhLKDjV+/eyUCMgr46fc49Wrf9m7s+20YSAAwzMar5L3FS84yfu/ZJumWDhgSQQoRvS/bU7I4bM9tgU1gKN++CqjQ84/ARkb+ZzPl3w4sbzPnaJ6rhfDvwCpSTnRUehH+rODaB7gndChlt8fxKVD4kUfcK99xD3W8j26O0hHhxrNH7OD1Z4dBFC9i2Aux+ydQXYx/S2tUPk02BzWe3oQXsjzTPUYIe+uIFFKh3xUT5AO1nt6EMjUV2Lo0Zx7R5CwJM0fkpHJ02CfH2RM1Wc2GEiR6m4gYaMbINjS3xAUPT8IuLp3QkgR704gkdw/Slexp2p3EBtAeK6Z69hLkeAOIAJ2Ka0MdFlpNEFsAAGH5FzXnWoR47cGEVEXS48Mz1ebLQZYAQK1Zpyi20iRdrgtiDe6JPPwfFVsdpFuB8gQ694Pt6S5orslCI41yXxcqTWcYnaAQKY9grsNyXx+KxAxTY2JR0CGH7mwBESuY+e4JtKSrA1vA5KNFclSD1fKYtNTXktA5FynGtfqSZa6NwAJppAR6ec5uqXxLU5bQCBQ3fiW1yOy3LkWZD8mMcnKymBTmECXLSDyoFW4qDqSy+rhGpDd2DV0VLP+sr7cWECbLSAQxfNhAVdLClocY0YFiIYjYnSc4uerlP7Wc9BmDQi42jEiR7scw8NPQHbcEcvf4+N6zfxTA+izBwSE4uxTFsR0XOyHF4J0Ee9aWtRUuF572bq+RSBjqbhelmUlLRMdNwbZT+NQNbRMoCJGl33G2CIQ2MntPkFFIqZlaeCYgDjRMLo9fatUvlZNh3IOJtkEApnymkBWtfS9wt8PAODV50H2zjTwyGVEJ5aoKpDbSAhGWQXC5RgpKlTllXRaE+xD4OFunyWev98j7vdd5+ymcOR8qkRBpzFX/TI0twezrAIB3mrWiWR1SueKc+G5zhQOHAD4OERTV/msobPlCSpL4h9cgVgFAmOuuVKTuUFBylJSl3uoLpO/IQDTLAOBodTey5D5Jf24PkNNSUo/uIVlGwiEqZwjGerycvpJMatQlxcf6XVgmnUgsDtaT01QWxU0l2q0PuoLaO6tZcxYxD4Q6Ggu9tCgTJRkXO67aFC99DAXsRAEkGQBGpUFfUHaGiY11LEjj5wxcxErQWBPMoGmVUHfxLRS+nk6jKa1Rx4NY5eIWAkCTkxzeYUXVCWBaPOmTOM/DEXZ5H3tJy5eUNUs94+LROwEgSnVLXXrc/Fn+elyflwmYikIhCXJBP67lve7WrYoAgAO6iwFgSEnxWHrbmUlydKeLaqwbguKm953VlmsBYGxVy3pXZ9++atZePT0RrK4juBs9oIAF3RUX+Hdq9r1w1X8/kHL6hDOZDEIQEWLbRLvXB0vXm6xe3zMHrJ4D6dZDQJTQ0eVHt4o/RJLnrGj8nfpcVxiz1PaDBtrOq6t8E5lLR3nOyoPmTgRsRwEAOPlccvFO+QKOi51gHtsrpUeWhH7QSDK6bhUuDfn+Lb62A8AUkTODyMR+0GA+4rFjOurWHxuMEgRkh6pSFzEym/XRV4ABGCXK5b7rivraVk7wWdSpJce8niZ5GsiLwECHFNa1nqo7/IFxwI5wFLk7ePschlbE3kJEIDRp2+lLMGrSk4/GOSP8JUU6T9WPrwnzou8CghA1NL3SpGhNvNVxj6CQ1LEWyyV6UVeBwRgX9BJTZ38QKNu6FS3g9O4kxz+GdFI5JVAgGNDp8X5JShJ0KZ0Wuly9f+wFqChyCuBAMhvEpygeBVqcpM6T+lcecd1D36v8CEiHfsK+TZBfrdjtFJctsJP3HMSvuiblFZiO/0jYlPEx4gg+yzjsFkQgKmm1eaV9LZnrP9cXS/TmFSpFzZCOUIeJDJ0+y4E2DIIwOC2dIPe3ptsADADeYCIbOsgvwuz5kqNj/f3N9DF50PWFkS2DPK7ySuu0iAikGmGerYFkY2DAPBdxuIfHKm+NIxA8sOowQ2IbB7kC6W6AOXtLW59mjP/ml2BGxB5CpDP+OQGbaqjeKOi91xEvARkor/VGxB5GpCvxqnLgjxdKHwVN73w5RS4BITPc8p7vMiTgRziYxjtyiJO07Jp8rZyUXYxCLjyu9oPF3lSENU31i8H4eV2RP6DfIb0SBG+93wPx/8gR9UPFOE++6weNCAcNh6/IQjPHyeSsK985xyIYIci2HgROySuBoGheIiIfj0kYIcy2HgZOxRcDwLhQ0T0IB6b28Gm27E5TwmydRE1SMXmhAMbzhFsrlKCbF1EDYKCyTwnCjdZ5HhMJlAJsnURDUjCnq5EDbJ1ETZ3FgQFe7IEqkG2LsIOrYBk7MnKNCBbF2FzEmSRz54qHzUgWxdhcysgGLAn6ld7d7ejKBCEYfijK0DTSDd/MoDM3v9lblxTME5MXGTobWt5zowmHrwpKP9QR8+ChF5EsVuQNy+io6dBQi+iGAd556NWGj0PEnoRxTjII+Vb7Fp5Gf1FkNCLKMZBHiuDP25pzvEkSOhFFFuCPBaXSaoDlSZlHLEnQUIv8i2IUDRD6EWOIIEVOYIEVuQIEliRI0hgRY4gOxZJNgUxR5AfL/KJ1XLFJrlBYmI1vBYpMqylFcvkBrHEOvgtcsZaiWK93CApsRGei5ywUqxYLDeIIqbhpcjyjDlWGhTTcoPUxFp4KlLxgwzWydTsJDWIpdkveCpSvvznlLlipdQgH8Qc4KsIP2mKlUo1y2QGKWmWw1uRlNeILV+KlRmkotkAb0XaVxdtk6vZEAmkaVYb+CvCD8Ban2phI3EsLSzgr0hBN2bLiLgyEsY6mrkJ/orEyx6xYUQKJ2xGrKNFAvgrwpNZYTWjFXNE50iQM33RGHgskm9Y7HrFGiLqxAyJ7eirAfBYhO+N8YKYg1R8zWIBkorupIC/IstsZi/+NvpmpBs3atvGb6u1enR0rzLwWMQW297vn/R8zBKquYDtUyR5vEvEeM3lzCMiU30C26fI3Taki+2LxEWrPzqSqOEeexapb18vbnWz6UN1NqW8+cpTXcD2KcJc093dVgavM7G6GguSJjXYCxd5rJuwSa+vRT6EFWkG3PFXxJ2wkfnMrzMi6ajlEoOdXap9TlycRNKZvbYT9mfO9MA44UeYvszVKOH1iMsHAz+ihr5xrcHPyYY4UVX9tieTuht128MjE9f0RWEnHP4t09uqoKsu6YO//t7/YsqyYzQOh5V+AwYAUu+urRW4AAAAAElFTkSuQmCC"
              alt="">
            暂无数据
          </div>


          <div class="loading_ajax" v-if="loading_ajax" style="width: 100%;height: 300px;margin-top:200px;">
            <img
              src="data:image/gif;base64,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"
              style="display: block;margin: 0 auto;" alt="loading">
            <p style="width: 100%;height: 30px;line-height: 30px;
                        font-size: 14px;color:#666;
                        text-align: center;">计算中...</p>
          </div>


          <div v-if="flag">
            <h4 v-html="form.location_name||'-'"></h4>
            <div class="counter_content_right_table">
              <table cellpadding="0" cellspacing="0">
                <thead>
                  <tr>
                    <th rowspan="2" style="width: 80px;">险种</th>
                    <th rowspan="2" style="width: 80px;">缴费基数</th>
                    <th colspan="2" style="background:#fff8f9;">企业缴费</th>
                    <th colspan="2" style="background:#fdeff1;">个人缴费</th>
                    <th rowspan="2" style="width: 80px;">小计</th>

                  </tr>
                  <tr>
                    <th style="background:#fff8f9;">缴费比例</th>
                    <th style="background:#fff8f9;">缴费金额</th>
                    <th style="background:#fdeff1;">缴费比例</th>
                    <th style="background:#fdeff1;">缴费金额</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>养老</td>
                    <td>{{items.personalCals.medical.cardinal}}</td>

                    <td style="background:#fff8f9;">
                      {{items.enterpriseCals.old.percent}}
                    </td>
                    <td style="background:#fff8f9;">{{items.enterpriseCals.old.money}}</td>

                    <td style="background:#fdeff1;">{{items.personalCals.old.percent}}</td>
                    <td style="background:#fdeff1;">{{items.personalCals.old.money}}</td>


                    <td>
                      {{total.old}}
                    </td>
                  </tr>
                  <tr>
                    <td>工伤</td>
                    <td>{{items.enterpriseCals.injury.cardinal}}</td>

                    <td style="background:#fff8f9;">{{items.enterpriseCals.injury.percent}}
                    </td>
                    <td style="background:#fff8f9;">{{items.enterpriseCals.injury.money}}</td>

                    <td style="background:#fdeff1;">-</td>
                    <td style="background:#fdeff1;">0.00</td>


                    <td>{{items.enterpriseCals.injury.money}}</td>
                  </tr>
                  <tr>
                    <td>失业</td>
                    <td>{{items.personalCals.job.cardinal}}</td>


                    <td style="background:#fff8f9;">{{items.enterpriseCals.job.percent}}</td>
                    <td style="background:#fff8f9;">{{items.enterpriseCals.job.money||'0.00'}}</td>

                    <td style="background:#fdeff1;">{{items.personalCals.job.percent}}</td>
                    <td style="background:#fdeff1;">{{items.personalCals.job.money||'0.00'}}</td>


                    <td>
                      {{total.job}}
                    </td>
                  </tr>
                  <tr>
                    <td>生育</td>
                    <td>{{items.enterpriseCals.bear.cardinal || '-'}}</td>


                    <td style="background:#fff8f9;">{{items.enterpriseCals.bear.percent}}</td>
                    <td style="background:#fff8f9;">{{items.enterpriseCals.bear.money||'0.00'}}</td>


                    <td style="background:#fdeff1;">-</td>
                    <td style="background:#fdeff1;">0.00</td>

                    <td>{{total.bear}}</td>
                  </tr>
                  <tr>
                    <td>医疗</td>
                    <td>{{items.personalCals.medical.cardinal}}</td>


                    <td style="background:#fff8f9;">{{items.enterpriseCals.medical.percent}}
                    </td>
                    <td style="background:#fff8f9;">{{items.enterpriseCals.medical.money}}</td>

                    <td style="background:#fdeff1;">
                      {{items.personalCals.medical.percent}}
                    </td>
                    <td style="background:#fdeff1;">
                      {{items.personalCals.medical.money}}
                    </td>


                    <td>
                      {{total.medical}}
                    </td>
                  </tr>
                  <tr>
                    <td>大额医疗</td>
                    <td>{{items.enterpriseCals.big_medical.cardinal}}</td>
                    <td style="background:#fff8f9;">{{items.enterpriseCals.big_medical.percent}}
                    </td>
                    <td style="background:#fff8f9;">{{items.enterpriseCals.big_medical.money}}
                    </td>

                    <td style="background:#fdeff1;">{{items.personalCals.big_medical.percent}}
                    </td>
                    <td style="background:#fdeff1;">{{items.personalCals.big_medical.money}}
                    </td>
                    <td>

                      {{total.big_medical}}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">社保（合计）</td>
                    <td colspan="2" style="color:#333;background:#fff8f9;" v-html="total.t1"></td>
                    <td colspan="2" style="color:#333;background:#fdeff1;" v-html="total.t2"></td>
                    <td style="color:#333;" v-html="total.t3"></td>
                  </tr>
                  <tr>
                    <td>公积金</td>
                    <td>{{items.personalCals.fund.cardinal || '0.00'}}</td>

                    <td style="background:#fff8f9;">{{items.enterpriseCals.fund.percent || '0.00'}}</td>
                    <td style="background:#fff8f9;">{{items.enterpriseCals.fund.money || '0.00'}}</td>

                    <td style="background:#fdeff1;">{{items.personalCals.fund.percent || '0.00'}}</td>
                    <td style="background:#fdeff1;">{{items.personalCals.fund.money || '0.00'}}</td>


                    <td>
                      {{total.fund}}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">五险一金（合计）</td>
                    <td colspan="2" style="color:#f73143;background:#fff8f9;" v-html="items.enterpriseTotalMoney"></td>
                    <td colspan="2" style="color:#f73143;background:#fdeff1;" v-html="items.personalTotalMoney">

                    </td>
                    <td style="color:#f73143;" v-html="items.allTotalMoney">
                    </td>
                  </tr>

                </tbody>

              </table>

              <Button type="error" @click="doIt" class="buy_shebao" size="large" style="">
                自助购买社保
              </Button>
            </div>
          </div>


        </div>

      </div>
    </div>

    <div class="counter_bottom">
      <div class="counter_bottom_content">

        <div class="counter_bottom_content_child">
          <Row>
            <Col span="6" v-for="(item,index3) in lists" :key="index3">
            <div class="counter_bottom_content_c" :class="{active_c:index3===3}">
              <div class="counter_bottom_content_c_icon" :class="'icon' + index3"></div>

              <p :class="'p'+index3" v-html="item.str"></p>
            </div>
            </Col>
          </Row>

        </div>

      </div>


    </div>


  </div>
</template>

<script>
  export default {
    name: "counter",
    metaInfo: {
      title: '苏易保|苏易保社保代缴|社保代缴|苏州市社保代缴|在线社保代缴平台', // set a title
      meta: [{ // set meta
          name: 'description',
          content: '苏易保社保是中国互联网社保开创者,致力于为企业提供社保,综合保障,薪酬,残保金等综合解决方案.依托更透明,更高效,更放心的苏易保全直营服务体系,帮助广大企业控制用工风险,降低人工成本,提升员工福利'
        },
        { // set meta
          name: 'keywords',
          content: '苏易保,代缴社保,社保代缴,昆山社保代缴,苏州工业园区社保代缴、苏州社保代缴、苏州市区社保代缴'
        }
      ],
    },
    data() {
      const empty = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('该项为必填项'));
        } else {
          callback();
        }
      };

      return {
        isShow: true,
        empty: true,
        flag: false,
        loading_ajax: false,
        buttonLoading: false,
        //表格数据
        items: { //["old", "medical", "big_medical", "injury", "job", "bear", "fund"]
          personalCals: {
            old: {},
            medical: {},
            big_medical: {},
            injury: {},
            job: {},
            bear: {},
            fund: {},


          },
          enterpriseCals: {
            old: {},
            medical: {},
            big_medical: {},
            injury: {},
            job: {},
            bear: {},
            fund: {},

          }

        },
        formValidate: {
          city: '',
          cityLists: '',
          hukou: '',
          hukouLists: '',
          base: ''

        },
        ruleValidate: {
          city: [{
            validator: empty,
            trigger: 'change'
          }],
          hukou: [{
            validator: empty,
            trigger: 'change'
          }],
          base: [{
            validator: empty,
            trigger: 'change'
          }]
        },
        lists: [{
            str: '互联网个人社保专业\n' +
              '服务领跑者\n' +
              '城市生活的幸福保障'
          },
          {
            str: '  ' + '全国8城直营服务北京、\n' +
              '深圳、上海、广州、杭州、\n' +
              '厦门、重庆、成都'
          },
          {
            str: '国家级资质认证\n' +
              '正规 放心'
          },
          {
            str: '支付便捷微信、支付宝\n' +
              '均可付款\n' + '<br>' +
              '简单安全'
          }
        ],
        dataHuKouLists: {},
        form: {
          appkey: window.getUrl().key_online,
          location_code: '',
          location_name: '',
          base: '',
          hukou_type: '',
          hukou_title: '',
          vendor_id: ''

        },
        total: {
          old: 0,
          fund: 0,
          medical: 0,
          big_medical: 0,
          bear: 0,
          injury: 0,
          job: 0,
          t1: 0,
          t2: 0,
          t3: 0

        },
        num: 0,
        cityListsNew: [{
            title: '热门',
            lists: [{
                "code": "110000",
                "title": "北京",
                "initial": "B",
                "vendor_id": "1013"
              },
              {
                "code": "310000",
                "title": "上海",
                "initial": "S",
                "vendor_id": "1097"
              },
              {
                "code": "440100",
                "title": "广州市",
                "initial": "G",
                "vendor_id": "1022"
              },
              {
                "code": "440300",
                "title": "深圳市",
                "initial": "S",
                "vendor_id": "1021"
              },
              {
                "code": "330100",
                "title": "杭州市",
                "initial": "H",
                "vendor_id": "1077"
              },
              {
                "code": "350200",
                "title": "厦门市",
                "initial": "X",
                "vendor_id": "1075"
              },
              {
                "code": "510100",
                "title": "成都市",
                "initial": "C",
                "vendor_id": "1023"
              },
              {
                "code": "500000",
                "title": "重庆市",
                "initial": "C",
                "vendor_id": "1026"
              }
            ],
            reg: []
          },
          {
            title: 'A-H',
            lists: [],
            reg: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
          },
          {
            title: 'I-N',
            lists: [],
            reg: ['i', 'j', 'k', 'l', 'm', 'n']
          },
          {
            title: 'O-T',
            lists: [],
            reg: ['o', 'p', 'q', 'r', 's', 't']
          },
          {
            title: 'U-Z',
            lists: [],
            reg: ['u', 'v', 'w', 'x', 'y', 'z'],

          }
        ]
      }
    },
    methods: {

      colseIt() {
        this.$store.commit("modalFun", "hide");
      },
      doIt() {
        this.$store.commit("modalFun", "show");
      },
      zixun() {
        this.$store.commit("iframeFun", "show");
      },
      getCitys() {
        console.log(window.getUrl())
        let _this = this;
        _this.formValidate.cityLists = [];
        _this.dataHuKouLists = {};
        this.$http.get(window.getUrl().queryOptions, {
          params: {
            appkey: window.getUrl().key_online
          }
        }).then((d) => {

          if (d.code === 22000) {
            //地址解析
            d.result.locations.forEach((item) => {

              //2.1版本需求变更
              //将户口根据字母分类
              _this.cityListsNew.forEach((item2, index2) => {
                if (item2.reg.includes(item.x.toLowerCase())) {
                  item2.lists = item2.lists.concat(item.radioItems)
                }
              });

              item.radioItems.forEach((itemChild) => {
                _this.formValidate.cityLists.push({
                  value: itemChild.code,
                  label: itemChild.title,
                  vendor_id: item.vendor_id
                })
              })
            });
            //户口性质解析
            _this.dataHuKouLists = d.result.hukouTypes || {};


          } else {
            _this.$Notice.error({
              title: '后台接口报错，请联系管理员修复！',
            });
          }
        }).catch((d) => {
          _this.$Notice.error({
            title: '后台接口报错，请联系管理员修复！',
          });
        });

      },
      chooseCity(item) {
        let _this = this;
        this.isShow = true;
        this.formValidate.city = item.title;

        this.form.location_code = item.code;
        this.form.location_name = item.title;
        this.form.vendor_id = item.vendor_id;

        this.form.hukou_title = '';
        this.form.hukou_type = '';

        this.formValidate.hukouLists = [];
        this.formValidate.hukou = "";

        this.dataHuKouLists[item.code].hukou.forEach((item) => {
          _this.formValidate.hukouLists.push({
            value: item.code,
            label: item.title
          })

        });


      },
      changeCitysTag(index) {
        this.num = index;
      },

      changeSeleCity($event) { //废弃 2.0

        let _this = this;
        this.form.location_code = $event;
        this.form.location_name = this.dataHuKouLists[$event].title;
        this.form.vendor_id = this.dataHuKouLists[$event].vendor_id;

        this.form.hukou_title = '';
        this.form.hukou_type = '';

        this.formValidate.hukouLists = [];
        this.formValidate.hukou = "";

        this.dataHuKouLists[$event].hukou.forEach((item) => {
          _this.formValidate.hukouLists.push({
            value: item.code,
            label: item.title
          })

        });
      },
      changeSeleHukou($event) {
        let _this = this;
        this.form.hukou_type = $event;
        this.formValidate.hukouLists.forEach((item) => {
          if (item.value === $event) {
            _this.form.hukou_title = item.label || "";
          }
        });
      },
      handleSubmit(name) {
        let _this = this;
        //console.log(_this.$refs[name])
        this.$refs[name].validate((valid) => {
          if (valid) {
            _this.form.base = _this.formValidate.base;
            _this.buttonLoading = true;
            _this.flag = false;
            _this.loading_ajax = true;
            _this.empty = false;

            _this.$http.get(window.getUrl().compute, {
              params: _this.form
            }).then((d) => {
              _this.buttonLoading = false;
              _this.loading_ajax = false;
              _this.flag = true;
              if (d.code === 22000) {
                // _this.items = d.result.items || {};

                /**
                 * 这么多字段一个一个判断 真烦人
                 *
                 */


                let arrLists = ["old", "medical", "big_medical", "injury", "job", "bear", "fund"];

                //私人的数据处理
                //arrLists
                _this.total.t1 = 0;
                _this.total.t2 = 0;
                _this.total.t3 = 0;

                _this.items.personalTotalMoney = _this.toFixed2Fun(d.result.items.personalTotalMoney);
                _this.items.enterpriseTotalMoney = _this.toFixed2Fun(d.result.items.enterpriseTotalMoney);
                _this.items.allTotalMoney = _this.toFixed2Fun(d.result.items.allTotalMoney);


                arrLists.forEach((itemK) => { //d.result.items.personalCals[itemK]

                  if (!d.result.items.personalCals[itemK]) {
                    d.result.items.personalCals[itemK] = {
                      money: '0',
                      percent: '0',
                    }
                  }

                  if (itemK !== 'fund') {
                    _this.total.t2 += parseInt((d.result.items.personalCals[itemK].money || 0) * 100);
                  }


                  _this.items.personalCals[itemK].money = _this.toFixed2Fun(d.result.items.personalCals[
                    itemK].money);
                  _this.items.personalCals[itemK].cardinal = _this.toFixed2Fun(d.result.items.personalCals[
                    itemK].cardinal);
                  _this.items.personalCals[itemK].percent = _this.toFixed2Fun(d.result.items.personalCals[
                    itemK].percent) + '%';


                });
                //企业数据处理


                arrLists.forEach((itemK) => { //d.result.items.personalCals[itemK]

                  if (!d.result.items.enterpriseCals[itemK]) {
                    d.result.items.enterpriseCals[itemK] = {
                      money: '0',
                      percent: '0',
                    }
                  }
                  if (itemK !== 'fund') {
                    _this.total.t1 += parseInt((d.result.items.enterpriseCals[itemK].money || 0) * 100);
                  }


                  _this.items.enterpriseCals[itemK].money = _this.toFixed2Fun(d.result.items.enterpriseCals[
                    itemK].money);
                  _this.items.enterpriseCals[itemK].cardinal = _this.toFixed2Fun(d.result.items
                    .enterpriseCals[itemK].cardinal);
                  _this.items.enterpriseCals[itemK].percent = _this.toFixed2Fun(d.result.items
                    .enterpriseCals[itemK].percent) + '%';

                });


                //社保合计
                _this.total.t3 = _this.toFixed2Fun((_this.total.t1 + _this.total.t2 - 0) / 100);
                _this.total.t1 = _this.toFixed2Fun(_this.total.t1 / 100);
                _this.total.t2 = _this.toFixed2Fun(_this.total.t2 / 100);


                // old: 0,
                //     fund: 0,
                //     medical: 0,
                //     big_medical: 0,
                //     bear: 0,
                //     injury: 0,
                //     job: 0,

                _this.total.old = _this.toFixed2Fun((_this.items.enterpriseCals.old.money - 0) + (_this.items
                  .personalCals.old.money - 0));
                _this.total.fund = _this.toFixed2Fun((_this.items.enterpriseCals.fund.money - 0) + (_this.items
                  .personalCals.fund.money - 0));
                _this.total.medical = _this.toFixed2Fun((_this.items.enterpriseCals.medical.money - 0) + (_this
                  .items.personalCals.medical.money - 0));
                _this.total.big_medical = _this.toFixed2Fun((_this.items.enterpriseCals.big_medical.money - 0) +
                  (_this.items.personalCals.big_medical.money - 0));
                _this.total.bear = _this.toFixed2Fun((_this.items.enterpriseCals.bear.money - 0) + (_this.items
                  .personalCals.bear.money - 0));
                _this.total.injury = _this.toFixed2Fun((_this.items.enterpriseCals.injury.money - 0) + (_this
                  .items.personalCals.injury.money - 0));
                _this.total.job = _this.toFixed2Fun((_this.items.enterpriseCals.job.money - 0) + (_this.items
                  .personalCals.job.money - 0));


              } else {
                _this.$Notice.error({
                  title: '后台接口报错，请联系管理员修复1！',
                });
              }

            }).catch((d) => {
              _this.buttonLoading = false;
              _this.loading_ajax = false;
              _this.$Notice.error({
                title: '后台接口报错，请联系管理员修复error！',
              });

            });


          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
        this.empty = true;
        this.flag = false;
        this.loading_ajax = false;

      },
      toFixed2Fun(x) {
        var f = parseFloat(x);
        if (isNaN(f)) {
          return false;
        }
        var f = Math.round(x * 100) / 100;
        var s = f.toString();
        var rs = s.indexOf('.');
        if (rs < 0) {
          rs = s.length;
          s += '.';
        }
        while (s.length <= rs + 2) {
          s += '0';
        }
        return s;

      }

    },
    mounted() {
      //获取城市列表
      this.getCitys();

    }
  }

</script>

<style scoped type="text/less" lang="less">

  .counter {
        min-height: 500px;

        .counter_wrap {
            width: 100%;
            background: rgba(245, 245, 245, .3);
            padding-bottom: 15px;

        }

        .counter_content {
            padding-top: 60px;
            box-sizing: border-box;
            .counter_content_left {
                float: left;
                width: 330px;
                height: 620px;
                background-color: #ffffff;
                box-shadow: 2px 3px 24px 0px rgba(96, 96, 96, 0.11);
                margin-right: 14px;
                padding: 38px 30px 0 30px;
                box-sizing: border-box;
                h3 {
                    width: 200px;
                    height: 24px;
                    line-height: 24px;
                    font-size: 18px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #f73143;
                    padding-left: 30px;
                    margin-bottom: 20px;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAsCAYAAAATmipGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjA0MzlCREY5QTg3MTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjA0MzlCRTA5QTg3MTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMDQzOUJERDlBODcxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMDQzOUJERTlBODcxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plp5BYEAAAOjSURBVHja3FlJaBRBFJ1MJiYucSGXRMWoIQoJMkkQV9Cg4kVREcWr60U8qEQQXBGMosSTkouoCJqDCg4uIAY8uICKo4kxEDfiGpE4gm0W4yTxffwDRVlV3emZnh788NLVVb97Xtdfqn4lq6dycYBlO7AWmAxkB/yVQeA9EMmLNtZSRxYTvQUsDWSmPALmh/Bnt0SyBej2mVwuEOb2LKCOZvQzGkU83ZuBM+lkBNMq+3urlqzE5RKQA1hB/CngsY/pJmnzARFcWhMzTET7+KYvA/0zwelXiE0eUEQ6TXkNUOolE5g40fwAHMNMdgnDoX8aCiEfqU3zDH4B6lUDQcNDBT6YeoxuwDSjvUL7HHCc8q4HiX0LLzbybzomKspzIQK9SOi24pRoGVDiEdHKZInmCe1NDM/Tp27AFEzffQgmy82MXgX2AtM8CCKVvAPOuyFKq8Jhv9b6oZg+oyTkMOIr2PyD/HHkS9eBfkFvITBRevYrcFvqWw6MBQbonVhC6Z1tmNknyRAtBl5oxk4B27i9jImrZAMvGCQHgQOaNT8Mss1uTV9sGKsQ2mGDXpXmGVlKkvHRQcOYmAniBr24YtumkoFkiH4zjEUlX9SJOPbDoNeZjI+28oo0W5pBqhCPCvcXOZAmSTPeAZwU+vYBMWCcYC26tsA/75uIUM1EX5kPtANTfCg5TJvqKO8FrP8mj44ALkjRmsXl9H7gMvdNZb1C6Xky80agie+pLD8BjJRKkdfAOsxuzC3RGcAqzViNQHQ1MEehQ6cu64EdfE95t1yjNxe44TbqTR/S5TC1iCnpp8N0l9I8GpQqVp0MF9qj3XKxMz0d79zllUf84g7eAibkGvtikSIPNwj3ZzmK8yW9V3YliR1RSl0LFC+2FPl2ugO9K0BEmmVKUVaqaiYrhXpxUc/pftQJ0UJFpPYAD6S+ck16eir10So3SkpPb0C4PRmi5HNtCpMG+BRlD7ergTuad6xhk5PsBOoUOv0gXAayL91GfamGJMkioT3P8I5qTVuUbE1+dUx0wGHqMm3ffgvt7iH+Vm4i/dkRNSXoZw71Oh1+eMxQ5+fZ+Wgzlw4zpTxKa/Mu4b6B9wMTpOc/Sdu8Q3yV3ekxcE/x+3QutZX8n7Z5FkfhWw+PbVJSLg8THDpjJSiUB7RDX5GpRMn0RwJ//4WTkEaOznRuqikznIYb3DQRpYB6KJW1fkgcRHNMK1Oco5pWGjq3H+/DUQ9xqDcp/BFgAEOW24i+a+fbAAAAAElFTkSuQmCC) no-repeat 0;
                    -webkit-background-size: 21px 22px;
                    background-size: 21px 22px;
                }

            }
            .counter_content_right {
                float: right;
                width: 656px;
                height: 620px;
                background-color: #ffffff;
                box-shadow: 2px 3px 24px 0px rgba(96, 96, 96, 0.11);
                padding: 21px 24px;
                box-sizing: border-box;
                h4 {
                    width: 200px;
                    height: 20px;
                    margin-bottom: 20px;
                    line-height: 20px;
                    font-size: 16px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #999999;
                    padding-left: 20px;
                    box-sizing: border-box;
                    // background: url("../../../assets/images/counter/dingwei@2x.png") no-repeat left center;
                    -webkit-background-size: 13px 16px;
                    background-size: 13px 16px;
                }
                .counter_content_right_table {
                    width: 100%;
                    table {
                        width: 100%;
                        border-collapse: collapse; /*关键代码*/
                        border: 1px solid #e5e5e5;
                        thead {
                            border: none;
                            th {
                                font-size: 14px;
                                font-weight: normal;
                                font-stretch: normal;
                                letter-spacing: 0px;
                                color: #333333;
                                text-align: center;
                                height: 30px;
                                padding: 5px 0;
                                border-right: 1px solid #e5e5e5;
                                border-bottom: 1px solid #e5e5e5;
                            }
                        }
                        tbody {
                            td {
                                font-size: 14px;
                                font-weight: normal;
                                font-stretch: normal;
                                letter-spacing: 0px;
                                color: #666666;
                                text-align: center;
                                height: 30px;
                                padding: 8px 0;
                                border-right: 1px solid #e5e5e5;
                                border-bottom: 1px solid #e5e5e5;
                            }
                        }

                    }
                }
            }
        }
        .counter_bottom {
            position: relative;
            width: 100%;
            height: 130px;
            background-color: transparent;
            .counter_bottom_content {
                width: 100%;
                min-height: 200px;
                padding-top: 100px;
                box-sizing: border-box;
                .counter_bottom_content_child {
                    margin: 0 auto;
                    width: 1000px;
                    background: #ffffff;
                    height: 100px;
                    .counter_bottom_content_c {
                        position: relative;
                        width: 100%;
                        height: 100px;
                        border-left: 1px solid #f5f5f5;
                        /*padding-top:20px ;*/
                        box-sizing: border-box;
                        .counter_bottom_content_c_icon {
                            position: absolute;
                            top: -30px;
                            left: 100px;
                            width: 46px;
                            height: 46px;
                            border-radius: 50%;
                        }
                        .icon0 {
                            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABUCAYAAAAPvFA1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUYxNzVGMTA5QTg3MTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjA0MzlCRDg5QTg3MTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRjE3NUYwRTlBODcxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRjE3NUYwRjlBODcxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pit+qiMAABJoSURBVHja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) no-repeat 50%;
                            -webkit-background-size: 46px 42px;
                            background-size: 46px 42px;
                        }
                        .icon1 {
                            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABUCAYAAAAPvFA1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUYxNzVGMEM5QTg3MTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUYxNzVGMEQ5QTg3MTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRjE3NUYwQTlBODcxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRjE3NUYwQjlBODcxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp5rREwAABMRSURBVHja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) no-repeat 50%;
                            -webkit-background-size: 46px 42px;
                            background-size: 46px 42px;

                        }
                        .icon2 {
                            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABUCAYAAAAPvFA1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUYxNzVGMDg5QTg3MTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUYxNzVGMDk5QTg3MTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRjE3NUYwNjlBODcxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRjE3NUYwNzlBODcxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhdFUSsAABG/SURBVHja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) no-repeat 50%;
                            -webkit-background-size: 46px 42px;
                            background-size: 46px 42px;

                        }
                        .icon3 {
                            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABUCAYAAAAPvFA1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0FDNEZBODE5QTg3MTFFODg0QjdCRkI4M0Y0Nzg4MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FDNEZBODI5QTg3MTFFODg0QjdCRkI4M0Y0Nzg4MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQUM0RkE3RjlBODcxMUU4ODRCN0JGQjgzRjQ3ODgyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQUM0RkE4MDlBODcxMUU4ODRCN0JGQjgzRjQ3ODgyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiCubzcAABLRSURBVHja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) no-repeat 50%;
                            -webkit-background-size: 46px 42px;
                            background-size: 46px 42px;

                        }
                        p {
                            line-height: 25px;
                            font-size: 14px;
                            letter-spacing: 0px;
                            color: #999999;
                            text-align: center;
                            margin: 0 auto;
                            padding-top: 20px;
                            box-sizing: border-box;
                        }
                        .p0 {
                            width: 127px;
                        }
                        .p1 {
                            width: 158px;
                            text-align: center;

                        }
                        .p2 {
                            width: 110px;
                        }
                        .p3 {
                            width: 141px;
                        }
                    }
                    .active_c {
                        border-right: 1px solid #f5f5f5;
                    }
                }
            }

        }
    }

    .button_lists {
        width: 100%;
        box-sizing: border-box;
        button {
            display: block;
            width: 168px;
            border-radius: 21px;
            font-size: 18px;
            letter-spacing: 0px;
            color: #ffffff;
            text-align: center;
            margin: 20px auto 0;

        }
    }

    .show_shuo_m {
        width: 100%;
        padding-top: 40px;
        box-sizing: border-box;
        h4 {
            width: 120px;
            height: 15px;
            font-size: 14px;
            letter-spacing: 0px;
            color: #333333;
            text-align: left;
            margin-bottom: 17px;
            font-weight: 400;
        }
        p {
            width: 275px;
            line-height: 25px;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #999999;
            text-align: left;
            margin: 0;

        }
    }

    .buy_shebao {
        width: 214px;
        float: right;
        text-align: center;
        margin-top: 32px;
        border-radius: 21px;
        font-size: 18px;
        letter-spacing: 0px;
        color: #ffffff;

    }

    .erweima_modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        z-index: 1000;

    }

    .erweima_modal_content {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 400px;
        height: 260px;
        border-radius: 5px;
        z-index: 1001;
        // background: url("../../../assets/images/modal_bg.png") no-repeat center top;
        .erweima_modal_del {
            position: absolute;
            cursor: pointer;
            right: 20px;
            top: 20px;
            width: 14px;
            height: 14px;
            // background: url("../../../assets/images/modal_del.png") no-repeat center;
            -webkit-background-size: 14px 14px;
            background-size: 14px 14px;
        }

        .erweima_wrap {
            width: 150px;
            height: 150px;
            margin: 40px auto 10px;
            transition: all 0.3s;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        p {
            width: 100%;
            height: 22px;
            line-height: 22px;
            text-align: center;
            font-size: 14px;
            color: #fff;
        }
    }

    .fix_conents {
        position: fixed;
        bottom: 200px;
        right: 50px;
        li {
            width: 46px;
            height: 46px;
            border-top: 1px solid transparent;
            a {
                display: block;
                width: 46px;
                height: 46px;
                background: #fa6f7b;
                text-align: center;
                line-height: 45px;
                color: #fff;
                border-radius: 3px;
                i {
                    font-size: 30px;
                    font-weight: 500;
                }

            }
            &:nth-child(1) {
                border: none;
            }
            &:nth-child(1) a {
                text-align: center;
                line-height: 46px;
                font-size: 30px;
                color: #fff;
            }
            &:nth-child(2) a {
            }

        }

        .back_top a {
            display: block;
            width: 46px;
            height: 46px;
            background: #fa6f7b;
            text-align: center;
            line-height: 45px;
            color: #fff;
            border-radius: 3px;
            i {
                font-size: 30px;
                font-weight: 500;
                position: relative;
                left: -5px;
            }

        }
    }

    .iframe_wrap {
        position: fixed;
        right: 60px;
        bottom: -1000px;
        width: 320px;
        height: 480px;
        transition: all .3s;
        box-shadow: 2px 3px 24px 0px rgba(96, 96, 96, 0.11);
        z-index: 666;
        .iframe_wrap_del {
            display: block;
            width: 50px;
            height: 50px;
            position: absolute;
            background: transparent;
            right: -22px;
            top: -28px;
            font-size: 30px;
            color: #fff;
            text-align: center;
            line-height: 50px;
            border-radius: 50%;
            cursor: pointer;
            i {
                background: rgb(48, 122, 232);
                border-radius: 50%;
                color: #ffffff;
                font-weight: 600;
            }

        }
    }

    .iframe_active {
        bottom: 10px;
    }

    .erweima_modal {
        width: 165px;
        height: 165px;
        margin: 0 auto;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    .erweima_modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        z-index: 1000;

    }

    .erweima_modal_content {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 400px;
        height: 260px;
        border-radius: 5px;
        z-index: 1001;
        // background: url("../../../assets/images/modal_bg.png") no-repeat center top;
        .erweima_modal_del {
            position: absolute;
            cursor: pointer;
            right: 20px;
            top: 20px;
            width: 14px;
            height: 14px;
            // background: url("../../../assets/images/modal_del.png") no-repeat center top;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
        }

        .erweima_wrap {
            width: 150px;
            height: 150px;
            margin: 40px auto 10px;
            transition: all 0.3s;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        p {
            width: 100%;
            height: 22px;
            line-height: 22px;
            text-align: center;
            font-size: 14px;
            color: #fff;
        }
    }

    //2.1新需求
    .wrap_input_city {
        position: absolute;
        top: 0;
        left: 0;
        width: 190px;
        height: 36px !important;
        background: transparent;
        z-index: 20;
        cursor: pointer;
        .input_city_lists {
            position: absolute;
            top: 35px;
            left: 0;
            width: 430px;
            min-height: 160px;
            background-color: #ffffff;
            border: solid 1px #e5e5e5;
            overflow: hidden;
            z-index: 100;

            .input_city_lists_header {
                width: 100%;
                height: 42px;
                border-bottom: 1px solid #e5e5e5;
                .input_city_lists_header_item {
                    display: inline-block;
                    width: 33px;
                    height: 42px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 14px;
                    color: #666;
                    border-bottom: 2px solid transparent;
                    box-sizing: border-box;
                    margin: 0 20px;
                    font-weight: 500;
                }
                .active_c {
                    color: #f73143;
                    border-color: #f73143;
                }
            }
            .input_city_lists_content {
                width: 100%;
                min-height: 116px;
                background: #fff;
                padding-top: 15px;
                padding-bottom: 15px;
                box-sizing: border-box;
                a {
                    display: inline-block;
                    min-width: 66px;
                    line-height: 30px;
                    height: 30px;
                    text-align: left;
                    font-size: 13px;
                    color: #333;
                    box-sizing: border-box;
                    margin: 0 20px;
                    &:hover {
                        color: #f73143;
                    }
                }

            }
        }
        .none {
            display: none;
        }

    }


</style>
