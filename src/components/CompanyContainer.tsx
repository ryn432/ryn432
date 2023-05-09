import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./CompanyContainer.module.css";

type CompanyContainerType = {
  iconSolidcode?: string;

  /** Style props */
  camsolFoundationAlignSelf?: Property.AlignSelf;
  camsolFoundationWidth?: Property.Width;
  camsolFoundationPosition?: Property.Position;
  camsolFoundationTop?: Property.Top;
  camsolFoundationLeft?: Property.Left;
};

const CompanyContainer: FunctionComponent<CompanyContainerType> = ({
  iconSolidcode,
  camsolFoundationAlignSelf,
  camsolFoundationWidth,
  camsolFoundationPosition,
  camsolFoundationTop,
  camsolFoundationLeft,
}) => {
  const mobileNavDropdownStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: camsolFoundationAlignSelf,
      width: camsolFoundationWidth,
      position: camsolFoundationPosition,
      top: camsolFoundationTop,
      left: camsolFoundationLeft,
    };
  }, [
    camsolFoundationAlignSelf,
    camsolFoundationWidth,
    camsolFoundationPosition,
    camsolFoundationTop,
    camsolFoundationLeft,
  ]);

  return (
    <div className={styles.mobileNavDropdown} style={mobileNavDropdownStyle}>
      <div className={styles.navigationDropdown}>
        <div className={styles.navigationLink}>
          <div className={styles.navLink}>Company</div>
        </div>
        <img
          className={styles.iconsolidchevronDown}
          alt=""
          src="/iconsolidchevrondown.svg"
        />
      </div>
      <div className={styles.navigationDropdownMenu}>
        <div className={styles.singleNavigationColumn}>
          <div className={styles.navigationContent}>
            <img
              className={styles.rocketLaunchIcon}
              alt=""
              src="/rocket-launch.svg"
            />
            <div className={styles.headingSubheading}>
              <div className={styles.navLink}>Camsol Innovation</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.rocketLaunchIcon}
              alt=""
              src={iconSolidcode}
            />
            <div className={styles.headingSubheading}>
              <div className={styles.navLink}>Camsol Technology</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.rocketLaunchIcon}
              alt=""
              src="/volunteer-activism.svg"
            />
            <div className={styles.headingSubheading}>
              <div className={styles.navLink}>Camsol Foundation</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.rocketLaunchIcon}
              alt=""
              src="/question-answer.svg"
            />
            <div className={styles.headingSubheading}>
              <div className={styles.navLink}>Camsol Platform</div>
              <div
                className={styles.consolidationOfAnalysis}
              >{`Consolidation of analysis, consulting, implementation & maintenance.`}</div>
            </div>
          </div>
          <div className={styles.navigationContent}>
            <img
              className={styles.rocketLaunchIcon}
              alt=""
              src="/menu-book.svg"
            />
            <div className={styles.headingSubheading}>
              <div className={styles.navLink}>Camsol Learning</div>
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
  );
};

export default CompanyContainer;
