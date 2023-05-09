import { FunctionComponent } from "react";
import CompanyContainer from "../components/CompanyContainer";
import styles from "./NavigationBarCamsol.module.css";
const NavigationBarCamsol: FunctionComponent = () => {
  return (
    <div className={styles.navigationBarCamsol}>
      <div className={styles.styleComponentHeader}>
        <div
          className={styles.mobileNavigationBar}
        >{`Mobile Navigation Bar `}</div>
      </div>
      <div className={styles.navbars}>
        <div className={styles.navbarMobile}>
          <div className={styles.property1active}>
            <div className={styles.mobileNavigationHeader}>
              <div className={styles.navigationContainer}>
                <div className={styles.logoAndDepartment}>
                  <img
                    className={styles.circleGorup11}
                    alt=""
                    src="/circle-gorup-1-11@2x.png"
                  />
                  <div className={styles.brandNameAndDepartment}>
                    <b className={styles.camsol}>{`Camsol  `}</b>
                    <div className={styles.innovation}>Innovation</div>
                  </div>
                </div>
                <div className={styles.navbarToggle}>
                  <img className={styles.closeIcon} alt="" src="/close.svg" />
                </div>
              </div>
            </div>
            <div className={styles.navigationContent}>
              <div className={styles.navigationLink}>
                <div className={styles.aboutUs}>About us</div>
              </div>
              <div className={styles.navigationLink}>
                <div className={styles.aboutUs}>Our Process</div>
              </div>
              <CompanyContainer
                iconSolidcode="/iconsolidcode.svg"
                camsolFoundationAlignSelf="stretch"
              />
              <div className={styles.mobileNavDropdown}>
                <div className={styles.navigationDropdown}>
                  <div className={styles.navigationLink}>
                    <div className={styles.aboutUs}>Team</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown}
                    alt=""
                    src="/iconsolidchevrondown1.svg"
                  />
                </div>
                <div className={styles.navigationDropdownMenu}>
                  <div className={styles.singleNavigationColumn}>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/rocket-launch1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Innovation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/iconsolidcode1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Technology</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/volunteer-activism.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Foundation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/question-answer.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Platform</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/menu-book.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Learning</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.navigationDropdownMenuChild}
                    alt=""
                    src="/polygon-2.svg"
                  />
                </div>
              </div>
              <div className={styles.mobileNavDropdown}>
                <div className={styles.navigationDropdown}>
                  <div className={styles.navigationLink}>
                    <div className={styles.aboutUs}>Magazine</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown}
                    alt=""
                    src="/iconsolidchevrondown1.svg"
                  />
                </div>
                <div className={styles.navigationDropdownMenu}>
                  <div className={styles.singleNavigationColumn}>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/rocket-launch1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Innovation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/iconsolidcode1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Technology</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/volunteer-activism.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Foundation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/question-answer.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Platform</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/menu-book.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Learning</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.navigationDropdownMenuChild}
                    alt=""
                    src="/polygon-2.svg"
                  />
                </div>
              </div>
              <div className={styles.mobileNavDropdown}>
                <div className={styles.navigationDropdown}>
                  <div className={styles.navigationLink}>
                    <div className={styles.aboutUs}>Projects</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown}
                    alt=""
                    src="/iconsolidchevrondown1.svg"
                  />
                </div>
                <div className={styles.navigationDropdownMenu}>
                  <div className={styles.singleNavigationColumn}>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/rocket-launch1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Innovation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/iconsolidcode1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Technology</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/volunteer-activism.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Foundation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/question-answer.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Platform</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/menu-book.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Learning</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.navigationDropdownMenuChild}
                    alt=""
                    src="/polygon-2.svg"
                  />
                </div>
              </div>
              <div className={styles.buttonsCamsol}>
                <img
                  className={styles.localPostOfficeIcon}
                  alt=""
                  src="/local-post-office.svg"
                />
                <div className={styles.aboutUs}>Book Consultant</div>
                <img
                  className={styles.localPostOfficeIcon}
                  alt=""
                  src="/iconsolidarrowright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.property1inactive}>
            <div className={styles.mobileNavigationHeader}>
              <div className={styles.navigationContainer}>
                <div className={styles.logoAndDepartment}>
                  <img
                    className={styles.circleGorup11}
                    alt=""
                    src="/circle-gorup-1-11@2x.png"
                  />
                  <div className={styles.brandNameAndDepartment}>
                    <b className={styles.camsol}>{`Camsol  `}</b>
                    <div className={styles.innovation1}>Innovation</div>
                  </div>
                </div>
                <div className={styles.navbarToggle}>
                  <img className={styles.closeIcon} alt="" src="/segment.svg" />
                </div>
              </div>
            </div>
            <div className={styles.navigationContent16}>
              <div className={styles.navigationLink}>
                <div className={styles.aboutUs}>About us</div>
              </div>
              <div className={styles.navigationLink}>
                <div className={styles.aboutUs}>Our Process</div>
              </div>
              <CompanyContainer
                iconSolidcode="/iconsolidcode.svg"
                camsolFoundationAlignSelf="unset"
                camsolFoundationWidth="396px"
              />
              <div className={styles.mobileNavDropdown3}>
                <div className={styles.navigationDropdown}>
                  <div className={styles.navigationLink}>
                    <div className={styles.aboutUs}>Team</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown}
                    alt=""
                    src="/iconsolidchevrondown1.svg"
                  />
                </div>
                <div className={styles.navigationDropdownMenu}>
                  <div className={styles.singleNavigationColumn}>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/rocket-launch1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Innovation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/iconsolidcode1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Technology</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/volunteer-activism.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Foundation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/question-answer.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Platform</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/menu-book.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Learning</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.navigationDropdownMenuChild}
                    alt=""
                    src="/polygon-2.svg"
                  />
                </div>
              </div>
              <div className={styles.mobileNavDropdown3}>
                <div className={styles.navigationDropdown}>
                  <div className={styles.navigationLink}>
                    <div className={styles.aboutUs}>Magazine</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown}
                    alt=""
                    src="/iconsolidchevrondown1.svg"
                  />
                </div>
                <div className={styles.navigationDropdownMenu}>
                  <div className={styles.singleNavigationColumn}>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/rocket-launch1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Innovation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/iconsolidcode1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Technology</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/volunteer-activism.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Foundation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/question-answer.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Platform</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/menu-book.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Learning</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.navigationDropdownMenuChild}
                    alt=""
                    src="/polygon-2.svg"
                  />
                </div>
              </div>
              <div className={styles.mobileNavDropdown3}>
                <div className={styles.navigationDropdown}>
                  <div className={styles.navigationLink}>
                    <div className={styles.aboutUs}>Projects</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown}
                    alt=""
                    src="/iconsolidchevrondown1.svg"
                  />
                </div>
                <div className={styles.navigationDropdownMenu}>
                  <div className={styles.singleNavigationColumn}>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/rocket-launch1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Innovation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/iconsolidcode1.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Technology</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/volunteer-activism.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Foundation</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/question-answer.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Platform</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                    <div className={styles.navigationContent1}>
                      <img
                        className={styles.rocketLaunchIcon}
                        alt=""
                        src="/menu-book.svg"
                      />
                      <div className={styles.headingSubheading}>
                        <div className={styles.aboutUs}>Camsol Learning</div>
                        <div
                          className={styles.consolidationOfAnalysis}
                        >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.navigationDropdownMenuChild}
                    alt=""
                    src="/polygon-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileNavDropdown6}>
          <CompanyContainer
            iconSolidcode="/iconsolidcode2.svg"
            camsolFoundationAlignSelf="unset"
            camsolFoundationWidth="396px"
            camsolFoundationPosition="absolute"
            camsolFoundationTop="134px"
            camsolFoundationLeft="20px"
          />
          <div className={styles.property1inactive1}>
            <div className={styles.navigationDropdown}>
              <div className={styles.navigationLink}>
                <div className={styles.aboutUs}>Company</div>
              </div>
              <img
                className={styles.iconsolidchevronDown}
                alt=""
                src="/iconsolidchevrondown1.svg"
              />
            </div>
            <div className={styles.navigationDropdownMenu}>
              <div className={styles.singleNavigationColumn}>
                <div className={styles.navigationContent1}>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/rocket-launch.svg"
                  />
                  <div className={styles.headingSubheading}>
                    <div className={styles.aboutUs}>Camsol Innovation</div>
                    <div
                      className={styles.consolidationOfAnalysis}
                    >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                  </div>
                </div>
                <div className={styles.navigationContent1}>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/iconsolidcode2.svg"
                  />
                  <div className={styles.headingSubheading}>
                    <div className={styles.aboutUs}>Camsol Technology</div>
                    <div
                      className={styles.consolidationOfAnalysis}
                    >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                  </div>
                </div>
                <div className={styles.navigationContent1}>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/volunteer-activism.svg"
                  />
                  <div className={styles.headingSubheading}>
                    <div className={styles.aboutUs}>Camsol Foundation</div>
                    <div
                      className={styles.consolidationOfAnalysis}
                    >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                  </div>
                </div>
                <div className={styles.navigationContent1}>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/question-answer.svg"
                  />
                  <div className={styles.headingSubheading}>
                    <div className={styles.aboutUs}>Camsol Platform</div>
                    <div
                      className={styles.consolidationOfAnalysis}
                    >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                  </div>
                </div>
                <div className={styles.navigationContent1}>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/menu-book.svg"
                  />
                  <div className={styles.headingSubheading}>
                    <div className={styles.aboutUs}>Camsol Learning</div>
                    <div
                      className={styles.consolidationOfAnalysis}
                    >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                  </div>
                </div>
              </div>
              <img
                className={styles.navigationDropdownMenuChild}
                alt=""
                src="/polygon-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBarCamsol;
