import React from 'react'
import unkuser from '../image/UnknownUser.png';
import green_cricle_img from '../image/activity_green.webp';
import frgx from '../image/frgx.webp';
import team from '../image/Team.png';
import Partners from '../image/Partners.png';
import Ratio from '../image/Ratio.png';
import Profits from '../image/bnbBusd.png';
import achievements_cupImg from '../image/svg-image-25.svg';
import img26 from '../image/svg-image-26.svg';
import info27 from '../image/svg-image-27.svg';
import img28topicon from '../image/svg-image-28.svg';
import bluesedo from '../image/blue-blur.png';
import purplesedo from '../image/purple-blur.png';
import pinksedo from '../image/pink-blur.png';
import goldsedo from '../image/gold-blur.png';
import tiffanysedo from '../image/tiffany-blur.png';
import greensedo from '../image/green-blur.png';
import svg31viewicon from '../image/svg-image-31.svg';
import { Link } from 'react-router-dom';





const Deshbord = () => {

  const numberOfElements = 12; // Change this to the desired number of elements

  const blueElements = Array.from({ length: numberOfElements }, (_, index) => (
    <div key={index} className='forsage_blue'></div>
  ));

  return (
    <div class="content">
      <div className='container'>
        <div className='personal_user'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='personal_user_left'>
                <div className='unknowuser_img'>
                  <span className='unknowUser'><i class="fa fa-user-circle-o" aria-hidden="true"></i></span>
                </div>

                <div className='id_user'>
                  <h1>ID 1</h1>
                  <p> 0x14Dc...207F <span className='copy_con'><i class="fa fa-files-o" aria-hidden="true"></i></span></p>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='personal_user_right'>
                <div className='personal_link'>
                  <p>Personal link <span className='question_icon'><i class="fa fa-question" aria-hidden="true"></i></span></p>

                  <div className='forsage'>
                    <h3>forsage.io/b/xqg1z8</h3>
                    <button href='#'>Copy</button>
                  </div>
                </div>

                <div className='frgx' style={{ backgroundImage: `url(${frgx})`, backgroundSize: 'cover' }}>
                  <div className='login_to_show'>
                    <p>FRGX Token</p>
                    <p className='login_P' >Login to show balance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='partners_card_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='teams_all_card Partners1' style={{ backgroundImage: `url(${Partners})`, backgroundSize: 'cover' }}>
                <p className='card_title'>Partners</p>
                <h1>22051</h1>

                <div className='part_green_down'>
                  <div className='down_green'>
                    <p> <span className='toparrow'><i class="fa fa-long-arrow-up" aria-hidden="true"></i></span>17</p>
                  </div>

                  <div className='green_cricle'>
                    <img src={green_cricle_img} className='green_cricle_img' alt='green_cricle_img' />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='teams_all_card' style={{ backgroundImage: `url(${team})`, backgroundSize: 'cover' }}>
                <p className='card_title'>Team</p>
                <h1>1633990</h1>

                <div className='part_green_down'>
                  <div className='down_green'>
                    <p> <span className='toparrow'><i class="fa fa-long-arrow-up" aria-hidden="true"></i></span>763</p>
                  </div>

                  <div className='green_cricle'>
                    <img src={green_cricle_img} className='green_cricle_img' alt='green_cricle_img' />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='col-lg-2'>
              <div className='teams_all_card ' style={{ backgroundImage: `url(${Ratio})`, backgroundSize: 'cover' }}>
                <p className='card_title'>Ratio</p>
                <h1>22051</h1>

                <div className='part_green_down'>
                  <div className='down_green'>
                    <p> <span className='toparrow'><i class="fa fa-long-arrow-up" aria-hidden="true"></i></span>17</p>
                  </div>

                  <div className='green_cricle'>
                    <img src={green_cricle_img} className='green_cricle_img' alt='green_cricle_img' />
                  </div>
                </div>
              </div>
            </div> */}

            <div className='col-lg-6'>
              <div className='teams_all_card' style={{ backgroundImage: `url(${Profits})`, backgroundSize: 'cover' }}>
                <p className='card_title'>Profits</p>
                <div className='Profits-number'>
                  <div className='pro_num'>
                    <h1>1 114 502.9 BUSD</h1>
                    <p> <span className='toparrow'><i class="fa fa-long-arrow-up" aria-hidden="true"></i></span>256.9</p>
                  </div>

                  <div className='pro_num'>
                    <h1>363.1313 BNB</h1>
                    <p> <span className='toparrow'><i class="fa fa-long-arrow-up" aria-hidden="true"></i></span>1.7768</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='archivment_img'>
        <div className='container'>
          <div className='achievements_cup'>
            <div className='achievements_cupImg'>
              <img src={achievements_cupImg} alt='achievements_cupImg' className='achievements_cupImg' />
              <img src={achievements_cupImg} alt='achievements_cupImg' className='achievements_cupImg' />
              <img src={achievements_cupImg} alt='achievements_cupImg' className='achievements_cupImg' />
              <img src={achievements_cupImg} alt='achievements_cupImg' className='achievements_cupImg' />
            </div>

            <div className='archivment_show'>
              <a href='#'>Show all  <span className='rightarrow'><img src={img26} alt='rightarrow' className='rightarrow26' /></span></a>
            </div>
          </div>
        </div>
      </div>


      <div className='forsage_main'>
        <div className='container'>
          <div className='forsage_title'>
            <h2>Forsage  Programs</h2>

            <span className='forsage_info'> <img src={info27} alt='Info' className='Info27' /> Info </span>
          </div>

          <div className='forsage_card_main'>
            <div className='row'>
              <div className='col-lg-6'>
                <Link to="/Forsage_xxx">
                  <div className='forsage_card'>
                    <div className='blue_color'>
                      <img src={bluesedo} alt='blue_color' className='blue_color_img' />
                    </div>
                    <div className='card_menu'>
                      <h4>x3</h4>
                      <h4>367 975 BUSD</h4>
                    </div>

                    <div className='preview_card_sec'>
                      <div className='forsage_step'>
                        {blueElements}
                      </div>

                      <div className='prievi_btn'>
                        <button>Preview <span><img src={img28topicon} alt='img28topicon' className='img28topicon1' /></span></button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='col-lg-6'>
                <Link to="/Forsage_xxx2">
                  <div className='forsage_card'>
                    <div className='blue_color'>
                      <img src={purplesedo} alt='blue_color' className='blue_color_img' />
                    </div>
                    <div className='card_menu'>
                      <h4>x3</h4>
                      <h4>367 975 BUSD</h4>
                    </div>

                    <div className='preview_card_sec'>
                      <div className='forsage_step'>
                        {blueElements}
                      </div>

                      <div className='prievi_btn'>
                        <button>Preview <span><img src={img28topicon} alt='img28topicon' className='img28topicon1' /></span></button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='col-lg-6'>
                <Link to="/Forsage_xxx3">
                  <div className='forsage_card'>
                    <div className='blue_color'>
                      <img src={pinksedo} alt='blue_color' className='blue_color_img' />
                    </div>
                    <div className='card_menu'>
                      <h4>x3</h4>
                      <h4>367 975 BUSD</h4>
                    </div>

                    <div className='preview_card_sec'>
                      <div className='forsage_step'>
                        {blueElements}
                      </div>

                      <div className='prievi_btn'>
                        <button>Preview <span><img src={img28topicon} alt='img28topicon' className='img28topicon1' /></span></button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='col-lg-6'>
                <Link to="/Forsage_xxx4">
                  <div className='forsage_card'>
                    <div className='blue_color'>
                      <img src={goldsedo} alt='blue_color' className='blue_color_img gold_blue' />
                    </div>
                    <div className='card_menu'>
                      <h4>x3</h4>
                      <h4>367 975 BUSD</h4>
                    </div>

                    <div className='preview_card_sec'>
                      <div className='forsage_step'>
                        {blueElements}
                      </div>

                      <div className='prievi_btn'>
                        <button>Preview <span><img src={img28topicon} alt='img28topicon' className='img28topicon1' /></span></button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>


              {/* <div className='col-lg-6'>
                <div className='forsage_card'>
                  <div className='blue_color'>
                    <img src={tiffanysedo} alt='blue_color' className='blue_color_img greensedo2' />
                  </div>
                  <div className='card_menu'>
                    <h4>x3</h4>
                    <h4>367 975 BUSD</h4>
                  </div>

                  <div className='preview_card_sec'>
                    <div className='forsage_step'>
                      {blueElements}
                    </div>

                    <div className='prievi_btn'>
                      <button>Preview <span><img src={img28topicon} alt='img28topicon' className='img28topicon1' /></span></button>
                    </div>
                  </div>
                </div>
              </div> */}


              <div className='col-lg-6'>
                <Link to="/Forsage_xxx5">
                  <div className='forsage_card'>
                    <div className='blue_color'>
                      <img src={greensedo} alt='blue_color' className='blue_color_img ' />
                    </div>
                    <div className='card_menu'>
                      <h4>x3</h4>
                      <h4>367 975 BUSD</h4>
                    </div>

                    <div className='preview_card_sec'>
                      <div className='forsage_step'>
                        {blueElements}
                      </div>

                      <div className='prievi_btn'>
                        <button>Preview <span><img src={img28topicon} alt='img28topicon' className='img28topicon1' /></span></button>
                      </div>
                    </div>
                  </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='recent activity'>
        <div className='container'>
          <div className='forsage_title'>
            <h2>Platform recent activity</h2>
            <span className='forsage_info2'> <img src={info27} alt='Info' className='Info27' />  </span>
          </div>

          <div className='platfroms'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='seemore'>
                  <div className='view_Section_blank'></div>
                  <div className='seemore_btn'>
                    <button> <span><img src={svg31viewicon} alt='svg31viewicon' className='svg31viewicon' />
                    </span> See more </button>
                  </div>
                </div>
              </div>

              <div className='col-lg-4'>
                <div className='menber_totla_title'>
                  <h3>Members total <span className='forsage_info2'> <img src={info27} alt='Info' className='Info27' />  </span> </h3>

                  <h4>1 634 321</h4>

                  <p><span className='toparrow'><i class="fa fa-long-arrow-up" aria-hidden="true"></i></span>719</p>
                </div>

                <div className='menber_totla_title'>
                  <h3>Members total <span className='forsage_info2'> <img src={info27} alt='Info' className='Info27' />  </span> </h3>
                  <div className='busd busd2'>
                    <h2>BUSD</h2>
                    <h6>+ BUSD</h6>
                  </div>

                  <div className='busd'>
                    <h2>BNB</h2>
                    <h6>+ BNB</h6>
                  </div>
                </div>

                <div className='link_section_all'>
                  <h3>Forsage BUSD Contracts</h3>

                  <div className='link_contracts'>
                    <p>x3/x4</p>
                    <a href='#'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a>
                  </div>

                  <div className='link_contracts'>
                    <p>xXx</p>
                    <a href='#'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a>
                  </div>

                  <div className='link_contracts'>
                    <p>xGold</p>
                    <a href='#'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a>
                  </div>

                  <div className='link_contracts'>
                    <p>xQore</p>
                    <a href='#'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a>
                  </div>

                  <div className='link_contracts'>
                    <p>maxQore</p>
                    <a href='#'>0x5ac...B97 <span className='files'><i class="fa fa-files-o" aria-hidden="true"></i></span> <span className='linkIcon'><i class="fa fa-link" aria-hidden="true"></i></span></a>
                  </div>

                  <div className='trajection_made'>
                    <h3>Transactions made</h3>

                    <p>+</p>

                    <h3>Turnover, BUSD</h3>

                    <p>+</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='copy_right'>
          <p>© 2023 All Rights Reserved</p>
          <p>Documents</p>
        </div>
      </div>

    </div>
  )
}

export default Deshbord
