import { FunctionComponent } from "react";
import NavigationContainer from "../components/NavigationContainer";
import styles from "./NavigationBarCamsol1.module.css";
const NavigationBarCamsol1: FunctionComponent = () => {
  return (
    <div className={styles.navigationBarCamsol}>
      <div className={styles.styleComponentHeader}>
        <div className={styles.desktopNavigationBar}>
          Desktop Navigation Bar
        </div>
      </div>
      <div className={styles.styleComponentHeader1}>
        <div className={styles.navbar}>
          <div className={styles.property1sticky}>
            <div className={styles.navigationContainer}>
              <div className={styles.navigationContent}>
                <div className={styles.imgLogoAndDepartment}>
                  <div className={styles.circleVector}>
                    <img
                      className={styles.circleGorupIcon}
                      alt=""
                      src="/circle-gorup.svg"
                    />
                  </div>
                  <div className={styles.brandNameAndDepartment}>
                    <b className={styles.camsol}>{`Camsol  `}</b>
                    <div className={styles.technology}>Technology</div>
                  </div>
                </div>
                <div className={styles.navigation}>
                  <div className={styles.navigationLink}>
                    <div className={styles.navLink}>About</div>
                    <div className={styles.navigationLinkChild} />
                  </div>
                  <div className={styles.navigationLink1}>
                    <div className={styles.navLink}>Contact</div>
                    <div className={styles.navigationLinkChild} />
                  </div>
                  <div className={styles.navigationLink}>
                    <div className={styles.navLink}>Our Process</div>
                    <div className={styles.navigationLinkInner} />
                  </div>
                  <div className={styles.navigationDropdown}>
                    <div className={styles.navigationDropdown1}>
                      <div className={styles.navigationLink}>
                        <div className={styles.navLink}>Company</div>
                        <div className={styles.navigationLinkChild} />
                      </div>
                      <img
                        className={styles.iconsolidchevronDown}
                        alt=""
                        src="/iconsolidchevrondown2.svg"
                      />
                    </div>
                    <div className={styles.navigationDropdownMenu}>
                      <div className={styles.singleNavigationColumn}>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/rocket-launch2.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>
                              Camsol Innovation
                            </div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/iconsolidcode3.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>
                              Camsol Technology
                            </div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/volunteer-activism1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>
                              Camsol Foundation
                            </div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/question-answer1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>
                              Camsol Platform
                            </div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/menu-book1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>
                              Camsol Learning
                            </div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.navigationDropdownMenuChild}
                        alt=""
                        src="/polygon-21.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.navigationDropdown}>
                    <div className={styles.navigationDropdown1}>
                      <div className={styles.navigationLink}>
                        <div className={styles.navLink}>Team</div>
                        <div className={styles.navigationLinkChild} />
                      </div>
                      <img
                        className={styles.iconsolidchevronDown}
                        alt=""
                        src="/iconsolidchevrondown2.svg"
                      />
                    </div>
                    <div className={styles.navigationDropdownMenu1}>
                      <div className={styles.singleNavigationColumn1}>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/spatial-audio-off.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div
                              className={styles.navLink}
                            >{`Consultant `}</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/iconsolidcode3.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>{`Developer `}</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/brush.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>Designer</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/question-answer1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>C-Level</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/menu-book1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>Data Scientist</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.navigationFooter}>
                        <div className={styles.buttonsCamsol}>
                          <img
                            className={styles.localPostOfficeIcon}
                            alt=""
                            src="/local-post-office1.svg"
                          />
                          <div className={styles.navLink}>Camsol Team</div>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/iconsolidarrowright1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.navigationDropdown}>
                    <div className={styles.navigationDropdown1}>
                      <div className={styles.navigationLink}>
                        <div className={styles.navLink}>Projects</div>
                        <div className={styles.navigationLinkChild} />
                      </div>
                      <img
                        className={styles.iconsolidchevronDown}
                        alt=""
                        src="/iconsolidchevrondown2.svg"
                      />
                    </div>
                    <div className={styles.navigationDropdownMenu2}>
                      <div className={styles.navigationContent11}>
                        <div className={styles.headingSubheading10}>
                          <div className={styles.navLink}>Projects</div>
                          <div
                            className={styles.consolidationOfAnalysis10}
                          >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                        </div>
                      </div>
                      <div className={styles.largeNavigationContent}>
                        <div className={styles.singleNavigationColumn1}>
                          <div className={styles.navigationTitle}>
                            <div className={styles.navLink}>Innovation</div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/spatial-audio-off.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>Vuca</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/iconsolidcode3.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>Disruption</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/brush.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div
                                className={styles.navLink}
                              >{`Digital Transformation `}</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.singleNavigationColumn1}>
                          <div className={styles.navigationTitle}>
                            <div className={styles.navLink}>Technology</div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/spatial-audio-off.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div
                                className={styles.navLink}
                              >{`Consultant `}</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/iconsolidcode3.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div
                                className={styles.navLink}
                              >{`Developer `}</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/brush.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>Designer</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/question-answer1.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>C-Level</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.singleNavigationColumn1}>
                          <div className={styles.navigationTitle}>
                            <div className={styles.navLink}>Foundation</div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/spatial-audio-off.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div
                                className={styles.navLink}
                              >{`Consultant `}</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/iconsolidcode3.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div
                                className={styles.navLink}
                              >{`Developer `}</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/brush.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>Designer</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/question-answer1.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>C-Level</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.navigationFooter1}>
                        <div className={styles.largeNavigationContent}>
                          <div className={styles.singleNavigationColumn1}>
                            <div className={styles.navigationTitle3}>
                              <div className={styles.linkAndIcon}>
                                <div className={styles.navLink}>
                                  Innovation Projects
                                </div>
                                <img
                                  className={styles.iconsolidarrowRight1}
                                  alt=""
                                  src="/iconsolidarrowright2.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.navigationTitle3}>
                              <div className={styles.linkAndIcon}>
                                <div className={styles.navLink}>
                                  Technology Projects
                                </div>
                                <img
                                  className={styles.iconsolidarrowRight1}
                                  alt=""
                                  src="/iconsolidarrowright2.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.singleNavigationColumn6}>
                            <div className={styles.navigationTitle3}>
                              <div className={styles.linkAndIcon}>
                                <div className={styles.navLink}>
                                  Foundation Projects
                                </div>
                                <img
                                  className={styles.iconsolidarrowRight1}
                                  alt=""
                                  src="/iconsolidarrowright2.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.navigationDropdown}>
                    <div className={styles.navigationDropdown1}>
                      <div className={styles.navigationLink}>
                        <div className={styles.navLink}>Magazine</div>
                        <div className={styles.navigationLinkChild} />
                      </div>
                      <img
                        className={styles.iconsolidchevronDown}
                        alt=""
                        src="/iconsolidchevrondown2.svg"
                      />
                    </div>
                    <div className={styles.navigationDropdownMenu1}>
                      <div className={styles.singleNavigationColumn1}>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/spatial-audio-off.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div
                              className={styles.navLink}
                            >{`Consultant `}</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/iconsolidcode3.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>{`Developer `}</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/brush.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>Designer</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/question-answer1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>C-Level</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/menu-book1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>Data Scientist</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.navigationFooter}>
                        <div className={styles.buttonsCamsol}>
                          <img
                            className={styles.localPostOfficeIcon}
                            alt=""
                            src="/local-post-office1.svg"
                          />
                          <div className={styles.navLink}>Camsol Team</div>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/iconsolidarrowright1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.navigationCta}>
                <div className={styles.buttonsCamsol2}>
                  <img
                    className={styles.localPostOfficeIcon}
                    alt=""
                    src="/local-post-office2.svg"
                  />
                  <div className={styles.navLink}>Book Cunsltation</div>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/iconsolidarrowright3.svg"
                  />
                </div>
                <div className={styles.buttonsCamsol3}>
                  <img
                    className={styles.localPostOfficeIcon}
                    alt=""
                    src="/local-post-office.svg"
                  />
                  <div className={styles.navLink}>Book Consultant</div>
                  <img
                    className={styles.localPostOfficeIcon}
                    alt=""
                    src="/iconsolidarrowright4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.property1default}>
            <div className={styles.navigationContainer}>
              <div className={styles.navigationContent}>
                <div className={styles.imgLogoAndDepartment}>
                  <div className={styles.circleVector}>
                    <img
                      className={styles.circleGorupIcon}
                      alt=""
                      src="/circle-gorup.svg"
                    />
                  </div>
                  <div className={styles.brandNameAndDepartment}>
                    <b className={styles.camsol}>{`Camsol  `}</b>
                    <div className={styles.technology}>Technology</div>
                  </div>
                </div>
                <div className={styles.navigation}>
                  <div className={styles.navigationLink}>
                    <div className={styles.navLink}>About</div>
                    <div className={styles.navigationLinkChild} />
                  </div>
                  <div className={styles.navigationLink1}>
                    <div className={styles.navLink}>Contact</div>
                    <div className={styles.navigationLinkChild} />
                  </div>
                  <div className={styles.navigationLink}>
                    <div className={styles.navLink}>Our Process</div>
                    <div className={styles.navigationLinkChild} />
                  </div>
                  <div className={styles.navigationDropdown}>
                    <div className={styles.navigationDropdown1}>
                      <div className={styles.navigationLink}>
                        <div className={styles.navLink}>Company</div>
                        <div className={styles.navigationLinkChild} />
                      </div>
                      <img
                        className={styles.iconsolidchevronDown}
                        alt=""
                        src="/iconsolidchevrondown2.svg"
                      />
                    </div>
                    <div className={styles.navigationDropdownMenu}>
                      <div className={styles.singleNavigationColumn}>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/rocket-launch2.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>
                              Camsol Innovation
                            </div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/iconsolidcode3.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>
                              Camsol Technology
                            </div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/volunteer-activism1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>
                              Camsol Foundation
                            </div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/question-answer1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>
                              Camsol Platform
                            </div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/menu-book1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>
                              Camsol Learning
                            </div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.navigationDropdownMenuChild}
                        alt=""
                        src="/polygon-21.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.navigationDropdown}>
                    <div className={styles.navigationDropdown1}>
                      <div className={styles.navigationLink}>
                        <div className={styles.navLink}>Team</div>
                        <div className={styles.navigationLinkChild} />
                      </div>
                      <img
                        className={styles.iconsolidchevronDown}
                        alt=""
                        src="/iconsolidchevrondown2.svg"
                      />
                    </div>
                    <div className={styles.navigationDropdownMenu1}>
                      <div className={styles.singleNavigationColumn1}>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/spatial-audio-off.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div
                              className={styles.navLink}
                            >{`Consultant `}</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/iconsolidcode3.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>{`Developer `}</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/brush.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>Designer</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/question-answer1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>C-Level</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/menu-book1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>Data Scientist</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.navigationFooter}>
                        <div className={styles.buttonsCamsol}>
                          <img
                            className={styles.localPostOfficeIcon}
                            alt=""
                            src="/local-post-office1.svg"
                          />
                          <div className={styles.navLink}>Camsol Team</div>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/iconsolidarrowright5.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.navigationDropdown12}>
                    <div className={styles.navigationDropdown1}>
                      <div className={styles.navigationLink}>
                        <div className={styles.navLink}>Projects</div>
                        <div className={styles.navigationLinkChild} />
                      </div>
                      <img
                        className={styles.iconsolidchevronDown}
                        alt=""
                        src="/iconsolidchevrondown2.svg"
                      />
                    </div>
                    <div className={styles.navigationDropdownMenu2}>
                      <div className={styles.navigationContent11}>
                        <div className={styles.headingSubheading10}>
                          <div className={styles.navLink}>Projects</div>
                          <div
                            className={styles.consolidationOfAnalysis10}
                          >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                        </div>
                      </div>
                      <div className={styles.largeNavigationContent}>
                        <div className={styles.singleNavigationColumn1}>
                          <div className={styles.navigationTitle}>
                            <div className={styles.navLink}>Innovation</div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/spatial-audio-off.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>Vuca</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/iconsolidcode3.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>Disruption</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/brush.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div
                                className={styles.navLink}
                              >{`Digital Transformation `}</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.singleNavigationColumn1}>
                          <div className={styles.navigationTitle}>
                            <div className={styles.navLink}>Technology</div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/spatial-audio-off.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div
                                className={styles.navLink}
                              >{`Consultant `}</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/iconsolidcode3.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div
                                className={styles.navLink}
                              >{`Developer `}</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/brush.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>Designer</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/question-answer1.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>C-Level</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.singleNavigationColumn1}>
                          <div className={styles.navigationTitle}>
                            <div className={styles.navLink}>Foundation</div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/spatial-audio-off.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div
                                className={styles.navLink}
                              >{`Consultant `}</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/iconsolidcode3.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div
                                className={styles.navLink}
                              >{`Developer `}</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/brush.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>Designer</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                          <div className={styles.navigationContent1}>
                            <img
                              className={styles.rocketLaunchIcon}
                              alt=""
                              src="/question-answer1.svg"
                            />
                            <div className={styles.headingSubheading}>
                              <div className={styles.navLink}>C-Level</div>
                              <div
                                className={styles.consolidationOfAnalysis}
                              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.navigationFooter1}>
                        <div className={styles.largeNavigationContent}>
                          <div className={styles.singleNavigationColumn1}>
                            <div className={styles.navigationTitle3}>
                              <div className={styles.linkAndIcon}>
                                <div className={styles.navLink}>
                                  Innovation Projects
                                </div>
                                <img
                                  className={styles.iconsolidarrowRight1}
                                  alt=""
                                  src="/iconsolidarrowright2.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.navigationTitle3}>
                              <div className={styles.linkAndIcon}>
                                <div className={styles.navLink}>
                                  Technology Projects
                                </div>
                                <img
                                  className={styles.iconsolidarrowRight1}
                                  alt=""
                                  src="/iconsolidarrowright2.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.singleNavigationColumn6}>
                            <div className={styles.navigationTitle3}>
                              <div className={styles.linkAndIcon}>
                                <div className={styles.navLink}>
                                  Foundation Projects
                                </div>
                                <img
                                  className={styles.iconsolidarrowRight1}
                                  alt=""
                                  src="/iconsolidarrowright2.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.navigationDropdown}>
                    <div className={styles.navigationDropdown1}>
                      <div className={styles.navigationLink}>
                        <div className={styles.navLink}>Magazine</div>
                        <div className={styles.navigationLinkChild} />
                      </div>
                      <img
                        className={styles.iconsolidchevronDown}
                        alt=""
                        src="/iconsolidchevrondown2.svg"
                      />
                    </div>
                    <div className={styles.navigationDropdownMenu1}>
                      <div className={styles.singleNavigationColumn1}>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/spatial-audio-off.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div
                              className={styles.navLink}
                            >{`Consultant `}</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/iconsolidcode3.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>{`Developer `}</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/brush.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>Designer</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/question-answer1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>C-Level</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                        <div className={styles.navigationContent1}>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/menu-book1.svg"
                          />
                          <div className={styles.headingSubheading}>
                            <div className={styles.navLink}>Data Scientist</div>
                            <div
                              className={styles.consolidationOfAnalysis}
                            >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.navigationFooter}>
                        <div className={styles.buttonsCamsol}>
                          <img
                            className={styles.localPostOfficeIcon}
                            alt=""
                            src="/local-post-office1.svg"
                          />
                          <div className={styles.navLink}>Camsol Team</div>
                          <img
                            className={styles.rocketLaunchIcon}
                            alt=""
                            src="/iconsolidarrowright5.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.navigationCta}>
                <div className={styles.buttonsCamsol2}>
                  <img
                    className={styles.localPostOfficeIcon}
                    alt=""
                    src="/local-post-office2.svg"
                  />
                  <div className={styles.navLink}>Book Cunsltation</div>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/iconsolidarrowright3.svg"
                  />
                </div>
                <div className={styles.buttonsCamsol3}>
                  <img
                    className={styles.localPostOfficeIcon}
                    alt=""
                    src="/local-post-office.svg"
                  />
                  <div className={styles.navLink}>Book Consultant</div>
                  <img
                    className={styles.localPostOfficeIcon}
                    alt=""
                    src="/iconsolidarrowright4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavigationContainer />
        <div className={styles.navigationLink14}>
          <div className={styles.property1default1}>
            <div className={styles.navLink}>Nav Link</div>
            <div className={styles.navigationLinkChild} />
          </div>
          <div className={styles.property1hover}>
            <div className={styles.navLink}>Nav Link</div>
            <div className={styles.navigationLinkInner} />
          </div>
        </div>
        <div className={styles.lightBglogoHorizontal}>
          <div className={styles.circleVector2}>
            <img
              className={styles.circleGorupIcon2}
              alt=""
              src="/circle-gorup1.svg"
            />
          </div>
          <div className={styles.title}>
            <b className={styles.camsol2}>CAMSOL</b>
            <div className={styles.innovations}>Innovations</div>
          </div>
        </div>
        <div className={styles.imgLogoAndDepartment2}>
          <div className={styles.property1innovation}>
            <div className={styles.circleVector}>
              <img
                className={styles.circleGorupIcon}
                alt=""
                src="/circle-gorup2.svg"
              />
            </div>
            <div className={styles.brandNameAndDepartment}>
              <b className={styles.camsol}>{`Camsol  `}</b>
              <div className={styles.innovation2}>Innovation</div>
            </div>
          </div>
          <div className={styles.property1technology}>
            <div className={styles.circleVector}>
              <img
                className={styles.circleGorupIcon}
                alt=""
                src="/circle-gorup3.svg"
              />
            </div>
            <div className={styles.brandNameAndDepartment}>
              <b className={styles.camsol}>{`Camsol  `}</b>
              <div className={styles.technology}>Technology</div>
            </div>
          </div>
          <div className={styles.property1foundation}>
            <div className={styles.circleVector}>
              <img
                className={styles.circleGorupIcon5}
                alt=""
                src="/circle-gorup4.svg"
              />
            </div>
            <div className={styles.brandNameAndDepartment}>
              <b className={styles.camsol}>{`Camsol  `}</b>
              <div className={styles.foundation2}>Foundation</div>
            </div>
          </div>
          <div className={styles.property1platform}>
            <div className={styles.circleVector}>
              <img
                className={styles.circleGorupIcon5}
                alt=""
                src="/circle-gorup5.svg"
              />
            </div>
            <div className={styles.brandNameAndDepartment}>
              <b className={styles.camsol}>{`Camsol  `}</b>
              <div className={styles.platform}>Platform</div>
            </div>
          </div>
          <div className={styles.property1training}>
            <div className={styles.circleVector}>
              <img
                className={styles.circleGorupIcon5}
                alt=""
                src="/circle-gorup6.svg"
              />
            </div>
            <div className={styles.brandNameAndDepartment}>
              <b className={styles.camsol}>{`Camsol  `}</b>
              <div className={styles.platform}>Training</div>
            </div>
          </div>
        </div>
        <div className={styles.navigationDropdown16}>
          <div className={styles.property1inactive}>
            <div className={styles.navigationDropdown1}>
              <div className={styles.navigationLink}>
                <div className={styles.navLink}>Nav Link</div>
                <div className={styles.navigationLinkChild} />
              </div>
              <img
                className={styles.iconsolidchevronDown}
                alt=""
                src="/iconsolidchevrondown3.svg"
              />
            </div>
            <div className={styles.navigationDropdownMenu1}>
              <div className={styles.singleNavigationColumn1}>
                <div className={styles.navigationContent1}>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/spatial-audio-off2.svg"
                  />
                  <div className={styles.headingSubheading}>
                    <div className={styles.navLink}>{`Consultant `}</div>
                    <div
                      className={styles.consolidationOfAnalysis}
                    >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                  </div>
                </div>
                <div className={styles.navigationContent1}>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/iconsolidcode5.svg"
                  />
                  <div className={styles.headingSubheading}>
                    <div className={styles.navLink}>{`Developer `}</div>
                    <div
                      className={styles.consolidationOfAnalysis}
                    >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                  </div>
                </div>
                <div className={styles.navigationContent1}>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/brush2.svg"
                  />
                  <div className={styles.headingSubheading}>
                    <div className={styles.navLink}>Designer</div>
                    <div
                      className={styles.consolidationOfAnalysis}
                    >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                  </div>
                </div>
                <div className={styles.navigationContent1}>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/question-answer2.svg"
                  />
                  <div className={styles.headingSubheading}>
                    <div className={styles.navLink}>C-Level</div>
                    <div
                      className={styles.consolidationOfAnalysis}
                    >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                  </div>
                </div>
                <div className={styles.navigationContent1}>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/menu-book2.svg"
                  />
                  <div className={styles.headingSubheading}>
                    <div className={styles.navLink}>Data Scientist</div>
                    <div
                      className={styles.consolidationOfAnalysis}
                    >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
                  </div>
                </div>
              </div>
              <div className={styles.navigationFooter}>
                <div className={styles.buttonsCamsol}>
                  <img
                    className={styles.localPostOfficeIcon}
                    alt=""
                    src="/local-post-office4.svg"
                  />
                  <div className={styles.navLink}>Camsol Team</div>
                  <img
                    className={styles.rocketLaunchIcon}
                    alt=""
                    src="/iconsolidarrowright8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.property1active}>
            <div className={styles.navigationDropdown1}>
              <div className={styles.navigationLink}>
                <div className={styles.navLink}>Nav Link</div>
                <div className={styles.navigationLinkInner} />
              </div>
              <img
                className={styles.iconsolidchevronDown}
                alt=""
                src="/iconsolidchevrondown3.svg"
              />
            </div>
            <div className={styles.navigationDropdownMenu9}>
              <div className={styles.headingSubheading59}>
                <div className={styles.bookAConsultant}>Book a consultant</div>
                <div className={styles.bookAConsultant}>Start analyzing</div>
              </div>
              <img
                className={styles.navigationDropdownMenuInner}
                alt=""
                src="/polygon-22.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBarCamsol1;
